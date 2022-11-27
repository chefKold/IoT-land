export class Device {
  id: number | null = null;
  name: string | null = null;
  description: string | null = null;
  installationDate: Date | null = null;
  inMaintenance: boolean | null = null;
  mhz: number | null = null;
  networkAddress: string | null = null;

  constructor(
    id: number | null,
    name: string,
    description: string,
    installationDate: Date,
    inMaintenance: boolean,
    mhz: number,
    networkAddress: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.installationDate = installationDate;
    this.inMaintenance = inMaintenance;
    this.mhz = mhz;
    this.networkAddress = networkAddress;
  }
}
