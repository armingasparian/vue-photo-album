import {createApp} from 'vue'
import App from './App.vue'
import {store} from "@/photo-album/store"
import {router} from "@/photo-album/router";

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

