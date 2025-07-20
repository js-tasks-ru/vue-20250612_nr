import {defineComponent, onMounted, onUnmounted, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const getCurrentTime = () => new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'});

    let time = ref(getCurrentTime());
    let timerId = null;

    onMounted(() => {
      timerId = setInterval(() => {
        { time.value = getCurrentTime() }
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timerId);
    })

    return {
      time
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
