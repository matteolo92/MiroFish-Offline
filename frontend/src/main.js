import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BRAND_NAME, BRAND_TAGLINE, SOURCE_URL } from './brand'

document.title = BRAND_NAME

const app = createApp(App)

app.config.globalProperties.$brand = BRAND_NAME
app.config.globalProperties.$brandTagline = BRAND_TAGLINE
app.config.globalProperties.$sourceUrl = SOURCE_URL

app.use(router)

app.mount('#app')
