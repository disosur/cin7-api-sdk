import { BaseCin7SDK } from "../../core/base-sdk";

interface createAttributeSetPayload {
  Name: string; // Required

  // Up to 10 attribute slots, each with Name, Type, and Values
  Attribute1Name: string;
  Attribute1Type:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute1Values: string;

  Attribute2Name?: string;
  Attribute2Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute2Values?: string;

  Attribute3Name?: string;
  Attribute3Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute3Values?: string;

  Attribute4Name?: string;
  Attribute4Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute4Values?: string;

  Attribute5Name?: string;
  Attribute5Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute5Values?: string;

  Attribute6Name?: string;
  Attribute6Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute6Values?: string;

  Attribute7Name?: string;
  Attribute7Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute7Values?: string;

  Attribute8Name?: string;
  Attribute8Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute8Values?: string;

  Attribute9Name?: string;
  Attribute9Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute9Values?: string;

  Attribute10Name?: string;
  Attribute10Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute10Values?: string;
}

interface editAttributeSetPayload {
  ID?: string;
  Name: string;

  // Up to 10 attribute slots, each with Name, Type, and Values
  Attribute1Name: string;
  Attribute1Type:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute1Values: string;

  Attribute2Name?: string;
  Attribute2Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute2Values?: string;

  Attribute3Name?: string;
  Attribute3Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute3Values?: string;

  Attribute4Name?: string;
  Attribute4Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute4Values?: string;

  Attribute5Name?: string;
  Attribute5Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute5Values?: string;

  Attribute6Name?: string;
  Attribute6Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute6Values?: string;

  Attribute7Name?: string;
  Attribute7Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute7Values?: string;

  Attribute8Name?: string;
  Attribute8Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute8Values?: string;

  Attribute9Name?: string;
  Attribute9Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute9Values?: string;

  Attribute10Name?: string;
  Attribute10Type?:
    | "Not used"
    | "Text"
    | "Checkbox"
    | "List"
    | "Date"
    | "Numeric";
  Attribute10Values?: string;
}

export class AttributeSetMutations extends BaseCin7SDK {
  async create<T>(data: createAttributeSetPayload): Promise<T> {
    return this.post<T>("ref/attributeset", data);
  }

  async update<T>(id: string, data: editAttributeSetPayload): Promise<T> {
    return this.put<T>(`ref/attributeset`, data);
  }

  async delete<T>(id: string): Promise<T> {
    return this.delete<T>(`ref/attributeset?ID=${id}`);
  }
}
