import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiWeatherConditions',

  props: {
    icon: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    temp: {
      type: String,
      required: true
    },
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="title">{{ icon }}</div>
      <div class="weather-conditions__temp">{{ temp }}</div>
    </div>
  `,
})
