import {createRouter, createWebHistory} from "vue-router";
import PhotoApp from "@/photo-album/PhotoApp.vue";
import PhotoView from "@/photo-album/PhotoView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: PhotoApp,
            children: [
                {
                    path: 'albums/:id',
                    component: PhotoView,
                },
            ]
        }
    ]
})