import { Address } from "./custom-sub-types";

export class Device {
  id: number | null = null;
  name: string | null = null;
  address: Address | null = null;

  constructor(id: number | null, name: string, address: Address) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}
