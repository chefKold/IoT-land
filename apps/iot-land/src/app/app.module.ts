import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

import { DevicesComponent } from "./pages/management/device/device.component";
import { DeviceDetailsComponent } from "./pages/management/device/details/details.device.component";
import { CreateDeviceComponent } from "./pages/management/device/create/create.device.component";
import { DeviceFormComponent } from "./shared/forms/device.form/device.form.component";
import { EditDeviceComponent } from "./pages/management/device/edit/edit.device.component";
import { DeleteDeviceComponent } from "./pages/management/device/delete/delete.device.component";

import { FacilityComponent } from "./pages/management/facility/facility.component";
import { CreateFacilityComponent } from "./pages/management/facility/create/create.facility.component";
import { EditFacilityComponent } from "./pages/management/facility/edit/edit.component";
import { DeleteFacilityComponent } from "./pages/management/facility/delete/delete.component";
import { FacilityDetailsComponent } from "./pages/management/facility/details/details.facility.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    DevicesComponent,
    DeviceDetailsComponent,
    CreateDeviceComponent,
    DeviceFormComponent,
    EditDeviceComponent,
    DeleteDeviceComponent,
    FacilityComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    DeleteFacilityComponent,
    FacilityDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
