import {createStore} from "vuex";
import {albums} from "@/photo-album/albums";
import {photos} from "@/photo-album/photos";

export const store = createStore({
    modules: {
        albums,
        photos
    }
})