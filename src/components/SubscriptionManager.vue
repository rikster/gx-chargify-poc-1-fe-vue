<script setup>
import {ref, onMounted, inject} from "vue";

const root = ref();

onMounted(()=>{
  inject('componentsFactory').create('subscriptions-manager').render(root.value);
})

</script>

<template>
  <div ref="root"/>
</template>
