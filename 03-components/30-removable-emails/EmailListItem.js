import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['removeEmail'],

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="$emit('removeEmail')">❌</button>
    </li>
  `,
})

/* Изначально я передавал index в качестве пропса сюда и вызывал removeEmail вместе с ним. Но это лишние действие, index нам доступен и в EmailList. */
