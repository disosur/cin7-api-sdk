import fs from 'fs';
import path from 'path';

const moduleName = process.argv[2];

if (!moduleName) {
  console.error('Usage: npm run module-build -- <module-name>');
  process.exit(1);
}

const moduleNameLower = moduleName.toLowerCase();
const moduleNameCapitalized = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

const moduleDir = path.join('src', 'modules', moduleNameLower);
const indexPath = path.join('src', 'index.ts');

// --- Start: Main execution with error handling ---
try {
  if (fs.existsSync(moduleDir)) {
    throw new Error(`Module '${moduleNameLower}' already exists.`);
  }

  // Create module directory
  fs.mkdirSync(moduleDir, { recursive: true });

  // --- File Content Templates ---
  const indexContent = `
    import { ${moduleNameCapitalized}Queries } from './queries';
    import { ${moduleNameCapitalized}Mutations } from './mutations';

    export class ${moduleNameCapitalized}Module {
      public queries: ${moduleNameCapitalized}Queries;
      public mutations: ${moduleNameCapitalized}Mutations;

      constructor(accountId: string, applicationKey: string) {
        this.queries = new ${moduleNameCapitalized}Queries(accountId, applicationKey);
        this.mutations = new ${moduleNameCapitalized}Mutations(accountId, applicationKey);
      }
    }

    export { ${moduleNameCapitalized}Queries, ${moduleNameCapitalized}Mutations };
  `;

  const mutationsContent = `
    import { BaseCin7SDK } from '../../core/base-sdk';

    export class ${moduleNameCapitalized}Mutations extends BaseCin7SDK {
      async create<T>(data: any): Promise<T> {
        return this.post<T>('${moduleNameLower}', data);
      }

      async update<T>(id: string, data: any): Promise<T> {
        return this.put<T>(\`${moduleNameLower}/\${id}\`, data);
      }

      async delete<T>(id: string): Promise<T> {
        return this.delete<T>(\`${moduleNameLower}/\${id}\`);
      }
    }
  `;

  const queriesContent = `
    import { BaseCin7SDK } from '../../core/base-sdk';

    export class ${moduleNameCapitalized}Queries extends BaseCin7SDK {
      async get<T>(id: string): Promise<T> {
        return this.get<T>(\`${moduleNameLower}/\${id}\`);
      }

      async list<T>(options?: {
        search?: string;
        limit?: number;
        page?: number;
      }): Promise<T> {
        return this.get<T>('${moduleNameLower}', options);
      }
    }
  `;

  // Write module files
  fs.writeFileSync(path.join(moduleDir, 'index.ts'), indexContent.trim());
  fs.writeFileSync(path.join(moduleDir, 'mutations.ts'), mutationsContent.trim());
  fs.writeFileSync(path.join(moduleDir, 'queries.ts'), queriesContent.trim());

  // --- Update src/index.ts ---
  let indexFileContent = fs.readFileSync(indexPath, 'utf-8');

  // Add import
  const importStatement = `import { ${moduleNameCapitalized}Module } from './modules/${moduleNameLower}';`;
  indexFileContent = indexFileContent.replace(/(import.*from '.\/modules\/reference';)/, `$1\n${importStatement}`);

  // Add property
  const propertyStatement = `  public ${moduleNameLower}: ${moduleNameCapitalized}Module;`;
  indexFileContent = indexFileContent.replace(/(public reference: ReferenceModule;)/, `$1\n${propertyStatement}`);

  // Add instantiation
  const instantiationStatement = `    this.${moduleNameLower} = new ${moduleNameCapitalized}Module(accountId, applicationKey);`;
  indexFileContent = indexFileContent.replace(/(this.reference = new ReferenceModule\(accountId, applicationKey\);)/, `$1\n${instantiationStatement}`);

  // Add export
  const exportStatement = `export { ${moduleNameCapitalized}Module } from './modules/${moduleNameLower}';`;
  indexFileContent = indexFileContent.replace(/(export { ReferenceModule } from '.\/modules\/reference';)/, `$1\n${exportStatement}`);

  fs.writeFileSync(indexPath, indexFileContent);

  console.log(`Module '${moduleNameLower}' created and integrated successfully.`);

} catch (error) {
  console.error('An error occurred:', error.message);
  console.log('Reverting changes...');

  // Cleanup on error
  if (fs.existsSync(moduleDir)) {
    fs.rmSync(moduleDir, { recursive: true, force: true });
  }
  // A simple way to revert index.ts is to use git checkout
  const { execSync } = require('child_process');
  try {
    execSync(`git checkout -- ${indexPath}`);
    console.log('Reverted changes to src/index.ts');
  } catch (gitError) {
    console.error('Failed to revert src/index.ts. Please do it manually.', gitError.message);
  }

  process.exit(1);
}