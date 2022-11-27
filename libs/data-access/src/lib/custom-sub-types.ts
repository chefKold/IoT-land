export class Address {
  street: string | null = null;
  houseNumber: number | null = null;
  city: string | null = null;

  constructor(street: string, houseNumber: number, city: string) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
  }
}
