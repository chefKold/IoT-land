import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DevicesComponent } from "./pages/management/devices/devices.component";
import { DetailsComponent } from "./pages/management/devices/details/details.component";
import { CreateDeviceComponent } from "./pages/management/devices/create/create.device.component";
import { DeviceFormComponent } from "./shared/forms/device.form/device.form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    DevicesComponent,
    DetailsComponent,
    CreateDeviceComponent,
    DeviceFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
