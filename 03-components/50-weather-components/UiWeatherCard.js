import {computed, defineComponent} from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'
import UiWeatherAlert from "./UiWeatherAlert.js";
import UiWeatherConditions from "./UiWeatherConditions.js";
import UiWeatherDetailsList from "./UiWeatherDetailsList.js";

export default defineComponent({
  name: 'UiWeatherCard',

  components: {
    UiWeatherAlert,
    UiWeatherConditions,
    UiWeatherDetailsList
  },

  props: {
    weather: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const isNightTime = computed(() => {
      return props.weather.current.dt < props.weather.current.sunrise || props.weather.current.dt > props.weather.current.sunset;
    });

    function kelvinToCelsius(kelvin) {
      const celsius = kelvin - 273.15;
      return celsius.toFixed(1) + ' °C';
    }

    return {
      isNightTime,
      kelvinToCelsius,
      weatherConditionIcons: WeatherConditionIcons,
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': isNightTime }">
      <UiWeatherAlert v-if="weather.alert">
        {{ weather.alert.sender_name }}: {{ weather.alert.description }}
      </UiWeatherAlert>

      <div>
        <h2 class="weather-card__name">
          {{ weather.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{ weather.current.dt }}
        </div>
      </div>

      <UiWeatherConditions
        :icon="weatherConditionIcons[weather.current.weather.id]"
        :title="weather.current.weather.description"
        :temp="kelvinToCelsius(weather.current.temp)"
      />

      <UiWeatherDetailsList :weather="weather"/>
    </li>
  `,
})
