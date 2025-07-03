import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Payload for creating a new Fixed Asset Type.
 */
interface CreateFixedAssetTypePayload {
  /**
   * Name of the Fixed Asset Type.
   * Required. Max length: 50.
   */
  Name: string;

  /**
   * Depreciation method.
   * Required. Allowed values:
   * - 'No Depreciation'
   * - 'Straight Line'
   * - 'Declining Balance'
   * - 'Declining Balance (150%)'
   * - 'Declining Balance (200%)'
   * - 'Sum of the Years\' Digits'
   * - 'Full Depreciation at Purchase'
   */
  DepreciationMethod:
    | "No Depreciation"
    | "Straight Line"
    | "Declining Balance"
    | "Declining Balance (150%)"
    | "Declining Balance (200%)"
    | "Sum of the Years' Digits"
    | "Full Depreciation at Purchase";

  /**
   * Averaging method.
   * Required. Allowed values: 'Full Month', 'Actual Days'
   */
  AveragingMethod: "Full Month" | "Actual Days";

  /**
   * Rate (%) used for depreciation.
   * Required if EffectiveLife is not set.
   */
  Rate?: number;

  /**
   * Effective life of the asset in years.
   * Required if Rate is not set.
   */
  EffectiveLife?: number | null;

  /**
   * ChartOfAccount code for the Asset account.
   * Required. Must be Type == FIXED, Class == ASSET, Status == ACTIVE
   */
  AssetAccountCode: string;

  /**
   * ChartOfAccount code for the Accumulated Depreciation account.
   * Required. Must be Type == FIXED, Class == ASSET, Status == ACTIVE
   */
  AccumulatedDepreciationAccountCode: string;

  /**
   * ChartOfAccount code for the Depreciation Expense account.
   * Required.
   */
  DepreciationExpenseAccountCode: string;
}

/**
 * Payload for updating an existing Fixed Asset Type.
 */
interface EditFixedAssetTypePayload extends CreateFixedAssetTypePayload {
  /**
   * Unique ID of the Fixed Asset Type.
   * Required for PUT.
   */
  FixedAssetTypeID: string;
}

export class FixedAssetTypeMutations extends BaseCin7SDK {
  async create<T>(data: CreateFixedAssetTypePayload): Promise<T> {
    return this.post<T>("fixedassettype", data);
  }

  async update<T>(data: EditFixedAssetTypePayload): Promise<T> {
    return this.put<T>(`ref/fixedassettype`, data);
  }
}
