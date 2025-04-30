<script setup lang="ts">
import { ref } from "vue"
import Logo from "@/assets/logo.png"
import Menu from "@/components/Menu.vue"

const showMenu = ref<boolean>(false)
</script>

<template>
  <img :src="Logo" alt="logo" class="logo" @click="showMenu = !showMenu" />
  <Transition name="slide-fade">
    <Menu v-show="showMenu" />
  </Transition>
</template>

<style scoped>
.logo {
  --size: 50px;
  position: fixed;
  top: 5px;
  right: 5px;
  width: var(--size);
  height: var(--size);
  box-shadow: 0 0 15px deeppink;
  transition: all, 200ms;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px yellow;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
