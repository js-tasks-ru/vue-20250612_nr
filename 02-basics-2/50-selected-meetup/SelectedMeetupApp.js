import {defineComponent, ref, watch} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    let meetupId = ref(1);
    let maxPages = ref(5);
    let meetup = ref(null);

    watch(meetupId, async () => {
      try {
        meetup.value = await getMeetup(meetupId.value)
      } catch (err) {
        meetup.value = null;
        console.error(err);
      }
    }, { immediate: true });

    return {
      meetupId,
      maxPages,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary"
                type="button"
                :disabled="meetupId <= 1"
                @click="meetupId--">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="i in maxPages" class="radio-group__button">
            <input
              :id="'meetup-id-' + i"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="i"
              v-model="meetupId"
            />
            <label :for="'meetup-id-' + i" class="radio-group__label">{{ i }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="meetupId >= maxPages"
          @click="meetupId++">Следующий</button>
      </div>

      <div v-if="meetup" class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>
    </div>
  `,
})
