<script setup>
import { provide } from "vue";
import { Components } from "@maxio-com/self-service";
import { ButtonSettings } from "./styles/Button.js";
import { ColorPalette } from "./styles/ColorPallete.js";

let componentsFactory = new Components({
  i18nSettings: {
    loadPath: "https://staging-static.keen.io/ruc/en/{{ns}}.json",
    language: "en",
  },
  accessTokenUrl: "https://gx-chargify-poc-1.vercel.app/api/auth_v2", //"http://localhost:3000/api/auth_v2", , // REPLACE WITH YOUR AUTHENTICATION ENDPOINT URL

  theme: {
    colors: ColorPalette,
    components: {
      Button: { ...ButtonSettings, boxShadow: "none" },
    },
  },
});

provide("componentsFactory", componentsFactory);
</script>

<template>
  <div>
    <h1>Maxio Components</h1>
  </div>
  <p>
    Reference ID (Your App): od_poc1_customer_reference_1<br />
    <a href="https://greencrosstest-sit.chargify.com/customers/70369781"
      >https://greencrosstest-sit.chargify.com/customers/70369781</a
    >
  </p>
  <div class="wrapper">
    <router-link to="/customer-details">Go to Customer Details</router-link>
    <router-link to="/subscription-manager"
      >Go to Subscription Manager</router-link
    >
    <router-link to="/billing-history">Go to Billing History</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
.wrapper {
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
