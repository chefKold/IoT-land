import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { CreateDeviceComponent } from "./pages/management/device/create/create.device.component";
import { DeleteDeviceComponent } from "./pages/management/device/delete/delete.device.component";
import { DeviceDetailsComponent } from "./pages/management/device/details/details.device.component";
import { DevicesComponent } from "./pages/management/device/device.component";
import { EditDeviceComponent } from "./pages/management/device/edit/edit.device.component";
import { FacilityComponent } from "./pages/management/facility/facility.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    title: "Homepagina",
    component: HomeComponent,
  },
  {
    path: "about",
    title: "Over ons",
    component: AboutComponent,
  },

  // Facility routes
  {
    path: "facilities",
    title: "Alle facilities",
    component: FacilityComponent,
  },

  // Device routes
  {
    path: "devices",
    title: "Alle devices",
    component: DevicesComponent,
  },
  {
    path: "devices/create",
    title: "Create device",
    component: CreateDeviceComponent,
  },
  {
    path: "devices/:deviceId",
    title: "Device details",
    component: DeviceDetailsComponent,
  },
  {
    path: "devices/:deviceId/edit",
    title: "Edit device",
    component: EditDeviceComponent,
  },
  {
    path: "devices/:deviceId/delete",
    title: "Delete device",
    pathMatch: "full",
    component: DeleteDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
