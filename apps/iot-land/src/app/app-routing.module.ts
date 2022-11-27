import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { CreateDeviceComponent } from "./pages/management/devices/create/create.device.component";
import { DetailsComponent } from "./pages/management/devices/details/details.component";
import { DevicesComponent } from "./pages/management/devices/devices.component";
import { EditDeviceComponent } from "./pages/management/devices/edit/edit.device.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    title: "Homepagina",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "about",
    title: "Over ons",
    pathMatch: "full",
    component: AboutComponent,
  },
  {
    path: "devices",
    title: "Alle devices",
    pathMatch: "full",
    component: DevicesComponent,
  },
  {
    path: "devices/create",
    title: "Create device",
    pathMatch: "full",
    component: CreateDeviceComponent,
  },
  {
    path: "devices/:deviceId",
    title: "Device details",
    pathMatch: "full",
    component: DetailsComponent,
  },
  {
    path: "devices/:deviceId/edit",
    title: "Edit device",
    pathMatch: "full",
    component: EditDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
