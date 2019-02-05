import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"

import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MapComponent } from './map/map.component'

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule, AppRoutingModule, LeafletModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
