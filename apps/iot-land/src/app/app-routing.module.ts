import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

import { DevicesComponent } from "./pages/management/device/device.component";
import { DeviceDetailsComponent } from "./pages/management/device/details/details.device.component";
import { CreateDeviceComponent } from "./pages/management/device/create/create.device.component";
import { EditDeviceComponent } from "./pages/management/device/edit/edit.device.component";
import { DeleteDeviceComponent } from "./pages/management/device/delete/delete.device.component";

import { FacilityComponent } from "./pages/management/facility/facility.component";
import { CreateFacilityComponent } from "./pages/management/facility/create/create.facility.component";
import { EditFacilityComponent } from "./pages/management/facility/edit/edit.facility.component";
import { DeleteFacilityComponent } from "./pages/management/facility/delete/delete.facility.component";
import { FacilityDetailsComponent } from "./pages/management/facility/details/details.facility.component";

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
  {
    path: "facilities/create",
    title: "Create facility",
    component: CreateFacilityComponent,
  },
  {
    path: "facilities/:facilityId",
    title: "Facility details",
    component: FacilityDetailsComponent,
  },
  {
    path: "facilities/:facilityId/edit",
    title: "Edit facility",
    component: EditFacilityComponent,
  },
  {
    path: "facilities/:facilityId/delete",
    title: "Delete facility",
    component: DeleteFacilityComponent,
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
    component: DeleteDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
