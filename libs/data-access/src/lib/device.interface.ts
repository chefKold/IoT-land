export interface Device {
  id: number;
  name: string;
  description: string;
  installationDate: Date;
  inMaintenance: boolean;
  mhz: number;
  networkAddress: string;
}
