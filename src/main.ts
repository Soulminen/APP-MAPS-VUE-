import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic291bG1pbmVuIiwiYSI6ImNsYWlzbjV6ajA1dmMzb3FxY3l0eHgwOWQifQ.QarrytoLORzaYmjpM7UhZQ';

if ( !navigator.geolocation) {
    alert("Tu navegador no soporta el GeoLocation");
    throw new Error("Tu navegador no soporta el GeoLocation");  
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
