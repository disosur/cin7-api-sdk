import { ReferenceQueries } from './queries';

export class ReferenceModule {
  public queries: ReferenceQueries;

  constructor(accountId: string, applicationKey: string) {
    this.queries = new ReferenceQueries(accountId, applicationKey);
  }
}

export { ReferenceQueries };