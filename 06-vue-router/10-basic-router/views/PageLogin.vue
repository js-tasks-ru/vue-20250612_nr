<script setup lang="ts">
import { UiButton, UiFormGroup, UiInput } from '@shgk/vue-course-ui'
import { ref } from 'vue'
import MeetupsAuthForm from '../components/MeetupsAuthForm.vue'
import LayoutAuth from '../components/LayoutAuth.vue'
import { login } from '../api.ts'
import {useRouter, useRoute} from "vue-router";

const email = ref('demo@email')
const password = ref('password')

const router = useRouter();
const route = useRoute();

async function onSubmit() {
  try {
    await login(email.value, password.value)
    await router.push(route.query.from as string || { name: 'index' });
  } catch (error) {
    alert((error as Error).message)
  }
}
</script>

<template>
  <LayoutAuth title="Вход">
    <MeetupsAuthForm @submit="onSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" type="email" placeholder="demo@email" large required />
      </UiFormGroup>

      <UiFormGroup label="Пароль">
        <UiInput v-model="password" name="password" type="password" placeholder="password" large required />
      </UiFormGroup>

      <template #submit>
        <UiButton kind="primary" type="submit" wide size="large">Войти</UiButton>
      </template>

      <template #append>
        Нет аккаунта?
        <router-link :to="{ name: 'register' }">Зарегистрируйтесь</router-link>
      </template>
    </MeetupsAuthForm>
  </LayoutAuth>
</template>
