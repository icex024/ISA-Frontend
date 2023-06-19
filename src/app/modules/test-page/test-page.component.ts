import { Center } from './../model/center';
import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { CenterService } from '../services/center.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  map: Map;
  
  constructor(private centerService: CenterService) { }
  
  ngOnInit(): void {
    let center: Center
    this.centerService.getById().subscribe(res => {
      center = res
      console.log(center)
    this.map = new Map({
      view: new View({
        center: fromLonLat([19.833549,45.267136]),
        zoom: 10,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map'
    });
    const layer = new VectorLayer({
      source: new VectorSource({
          features: [
          new Feature({
              geometry: new Point(fromLonLat([center.longitude,center.latitude])),
          })
          ]
      }),
      style: new Style({
          image: new Icon({
          anchor: [0.5, 1],
          crossOrigin: 'anonymous',
          src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
          })
      })
      });
      this.map.addLayer(layer);
    })
    
  }

}
