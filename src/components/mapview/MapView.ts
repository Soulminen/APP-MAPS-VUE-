import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import mapboxgl from 'mapbox-gl';



export default defineComponent({
    name: 'MapView',
    setup() {
        

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();

        const initMap = async() => {
            if ( !mapElement.value ) throw new Error('Div Element no exits');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();
            
            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

        }

        onMounted(() => {
           if ( isUserlocationReady.value ) 
           return initMap();
           
            
        });

        watch ( isUserlocationReady, ( newVal ) => {
           if ( isUserlocationReady.value ) initMap(); 
        })

        return {

            isUserlocationReady,
            mapElement,

        }
    }
});