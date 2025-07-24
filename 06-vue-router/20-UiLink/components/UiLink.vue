<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  to?: string | object;
  href?: string;
  target?: string;
}>()

const component = computed(() => {
  if (props.to) return "RouterLink";
  if (props.href) return 'a';
  return 'span';
});

const componentProps = computed(() => {
  if (props.to) return { to: props.to, class: 'link', tabindex: '0' };
  if (props.href) return {
    href: props.href,
    class: 'link',
    tabindex: '0',
    target: props.target || '_self'
  };
  return { class: 'link', tabindex: '0' };
});
</script>

<template>
  <component :is="component" v-bind="componentProps">
    <slot/>
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
