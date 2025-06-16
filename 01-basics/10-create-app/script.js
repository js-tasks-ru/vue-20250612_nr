import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',
  setup() {
    function getCurrentDate() {
      return new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    }

    return { getCurrentDate };
  },
  template: `<div>Сегодня {{ getCurrentDate() }}</div>`,
})

const app = createApp(App)
const vm = app.mount('#app')
