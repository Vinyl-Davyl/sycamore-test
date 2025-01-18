import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'

import router from './router'
import './assets/index.css'
import './assets/themes.css'
import '@/utils/env'

function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())

  setupPlugins(app)

  app.use(router)
  app.mount('#app')
}

bootstrap()
