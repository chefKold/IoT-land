import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { DevicesComponent } from "./pages/management/devices/devices.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
