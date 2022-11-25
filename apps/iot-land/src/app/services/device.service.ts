import { Injectable } from "@angular/core";
import { Device } from "@iot-land/data-access";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  storage: Device[] = [];

  constructor() {
    this.seedData();
  }

  addDevice(device: Device): void {
    this.storage.push(device);
  }

  getDevices(): Device[] {
    return this.storage;
  }

  getDeviceById(id: number): Device | undefined {
    return this.storage.find((d) => d.id === id);
  }

  removeDevice(device: Device): void {
    this.storage = this.storage.filter((d) => d.id !== device.id);
  }

  updateDevice(device: Device): void {
    const index = this.storage.findIndex((d) => d.id === device.id);
    this.storage[index] = device;
  }

  private seedData(): void {
    this.storage.push({
      id: 1,
      name: "Raspberry Pi Zero 2 W",
      description:
        "At the heart of Raspberry Pi Zero 2 W is RP3A0, a custom-built system-in-package designed by Raspberry Pi in the UK. With a quad-core 64-bit ARM Cortex-A53 processor clocked at 1GHz and 512MB of SDRAM, Zero 2 is up to five times as fast as the original Raspberry Pi Zero.",
      installationDate: new Date(2019, 7, 10),
      inMaintenance: false,
      mhz: 3000,
      networkAddress: "192.168.0.1",
    });

    this.storage.push({
      id: 2,
      name: "Raspberry Pi 4",
      description:
        "Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimediaperformance, memory, and connectivity compared to the prior-generationRaspberry Pi 3 Model B+, while retaining backwards compatibility and similar power consumption. For the end user, Raspberry Pi 4 Model B provides desktop performance comparable to entry-level x86 PC systems.",
      installationDate: new Date(2019, 20, 11),
      inMaintenance: true,
      mhz: 2500,
      networkAddress: "192.168.40.8",
    });

    this.storage.push({
      id: 3,
      name: "Ring Video Doorbell 3",
      description:
        "With the Ring Video Doorbell 3, you'll be in direct contact with people on your doorstep regardless of your location. You can place this smart doorbell wirelessly at the front door or connect it to the existing wiring. Do you use it wirelessly? Just easily remove the battery when it needs to be charged. When someone walks by or rings the doorbell, you'll receive a notification on your phone. You can communicate with visitors via the Ring app. The close-up motion sensor of the Ring 3 can be set up to 1.5m in front of your door. Since the doorbell uses dual-band WiFi, the signal fades less quickly than with other Ring doorbells. The Full HD image quality with night vision means you'll always see what goes on at your doorstep.",
      installationDate: new Date(2022, 2, 14),
      inMaintenance: false,
      mhz: 1200,
      networkAddress: "192.168.102.10",
    });

    this.storage.push({
      id: 4,
      name: "Particle Photon Wi-Fi",
      description:
        "The Photon is a $19 tiny Wi-Fi IoT device for creating connected projects and products for the Internet of Things. It's easy to use, it's powerful, and it's connected to the cloud. The board is powered by a Cypress Wi-Fi chip alongside a powerful STM32 ARM Cortex M3 microcontroller",
      installationDate: new Date(2022, 4, 2),
      inMaintenance: false,
      mhz: 400,
      networkAddress: "192.168.280.88",
    });

    this.storage.push({
      id: 5,
      name: "Arduino Uno REV3",
      description:
        "The Arduino Uno is a microcontroller board based on the ATmega328. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started. The Uno differs from all preceding boards in that it does not use the FTDI USB-to-serial driver chip. Instead, it features the Atmega16U programmed as a USB-to-serial converter.",
      installationDate: new Date(2022, 20, 11),
      inMaintenance: true,
      mhz: 16,
      networkAddress: "192.168.280.88",
    });
  }
}
