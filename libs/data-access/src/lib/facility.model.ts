import { Address } from "./custom.sub.types";

export class Facility {
  id: number | null = null;
  name: string | null = null;
  description: string | null = null;
  address: Address | null = null;

  constructor(
    id: number | null,
    name: string,
    description: string,
    address: Address
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
  }
}
