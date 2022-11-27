import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { CreateDeviceComponent } from "./pages/management/devices/create/create.device.component";
import { DeleteDeviceComponent } from "./pages/management/devices/delete/delete.device.component";
import { DeviceDetailsComponent } from "./pages/management/devices/details/details.device.component";
import { DevicesComponent } from "./pages/management/devices/devices.component";
import { EditDeviceComponent } from "./pages/management/devices/edit/edit.device.component";

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
