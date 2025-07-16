import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import UiWeatherCard from "./UiWeatherCard.js";
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    UiWeatherCard,
  },

  setup() {
    return {
      weatherData: getWeatherData()
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <UiWeatherCard
          v-for="weather in weatherData"
          :weather="weather"
        />
      </ul>
    </div>
  `,
})
