import { BaseCin7SDK } from "../../core/base-sdk";

/**
 * Represents a Bin linked to a Location.
 */
interface BinModel {
  /**
   * Unique ID of the bin.
   * Only needed for deletion or if referenced later.
   */
  ID?: string;

  /**
   * Name of the bin.
   */
  Name: string;
}

/**
 * Payload for creating a Location.
 */
interface CreateLocationPayload {
  /**
   * Name of the location.
   * Required.
   */
  Name: string;

  /**
   * First address line.
   */
  AddressLine1?: string;

  /**
   * Second address line.
   */
  AddressLine2?: string;

  /**
   * City or suburb.
   */
  AddressCitySuburb?: string;

  /**
   * State or province.
   */
  AddressStateProvince?: string;

  /**
   * ZIP or postal code.
   */
  AddressZipPostCode?: string;

  /**
   * Country.
   */
  AddressCountry?: string;

  /**
   * Whether the location is a shopfloor.
   */
  IsShopfloor?: boolean;

  /**
   * Whether the location is a co-manufacturer location.
   */
  IsCoMan?: boolean;

  /**
   * Whether the location is a staging area (only used for bins).
   */
  IsStaging?: boolean;

  /**
   * Array of bins associated with the location.
   * Only used for creation.
   */
  Bins?: BinModel[];
}

/**
 * Payload for editing an existing Location.
 * Bins are not editable through this interface.
 */
interface EditLocationPayload extends Omit<CreateLocationPayload, "Bins"> {
  /**
   * Unique ID of the location.
   * Required for editing.
   */
  ID: string;
}

export class LocationMutations extends BaseCin7SDK {
  async create<T>(data: CreateLocationPayload): Promise<T> {
    return this.post<T>("location", data);
  }

  async update<T>(data: EditLocationPayload): Promise<T> {
    return this.put<T>("location", data);
  }

  async delete<T>(id: string): Promise<T> {
    return this.delete<T>(`location?ID=${id}`);
  }
}
