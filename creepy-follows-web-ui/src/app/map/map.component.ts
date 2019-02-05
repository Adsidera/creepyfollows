import { Component, OnInit } from "@angular/core"
import { tileLayer, latLng } from "leaflet"

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 50,
        minZoom: 12
      })
    ],
    zoom: 5,
    center: latLng(52.511677, 13.381777)
  }

  layersControl = {
    baseLayers: {
      "Open Street Map": tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { maxZoom: 18 }
      ),
      "Open Cycle Map": tileLayer(
        "http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png",
        { maxZoom: 18 }
      )
    }
  }

  constructor() {}

  ngOnInit() {}
}
