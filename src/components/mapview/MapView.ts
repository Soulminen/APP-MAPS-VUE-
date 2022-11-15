import { defineComponent, ref, onMounted } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';

export default defineComponent({
    name: 'MapView',
    setup() {
        

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore();

        onMounted(() => {
            console.log( mapElement.value );
            
        })

        return {

            isUserlocationReady,
            mapElement,

        }
    }
});