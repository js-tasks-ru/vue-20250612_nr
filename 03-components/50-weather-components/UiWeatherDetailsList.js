import { defineComponent } from 'vue'
import UiWeatherDetailsListItem from "./UiWeatherDetailsListItem.js";

export default defineComponent({
  name: 'UiWeatherDetailsList',

  components: {
    UiWeatherDetailsListItem
  },

  props: {
    weather: {
      type: Object,
      required: true
    }
  },

  setup() {
    function hPaToMmHg(hPa) {
      const mmHg = hPa * 0.750062;
      return Math.round(mmHg);
    }

    return {
      hPaToMmHg
    }
  },

  template: `
      <div class="weather-details">
        <UiWeatherDetailsListItem
            label="Давление, мм рт. ст."
            :value="hPaToMmHg(weather.current.pressure)"
        />
        <UiWeatherDetailsListItem
            label="Влажность, %"
            :value="weather.current.humidity"
        />
        <UiWeatherDetailsListItem
            label="Облачность, %"
            :value="weather.current.clouds"
        />
        <UiWeatherDetailsListItem
            label="Ветер, м/с"
            :value="weather.current.wind_speed"
        />
      </div>
  `,
})
