import {defineComponent} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ["update:count"],

  setup(props, { emit }) {
    function updateCount(count) {
      emit('update:count', count)
    }

    return {
      updateCount,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count === min" @click="updateCount(count - 1)">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count === max" @click="updateCount(count + 1)">➕</UiButton>
    </div>
  `,
})
