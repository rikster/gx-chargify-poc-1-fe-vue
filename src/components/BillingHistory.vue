<script setup>
import {ref, onMounted, inject} from "vue";

const root = ref();

onMounted(()=>{
  inject('componentsFactory').create('billing-history').render(root.value,{
    billingHistory:{
    itemsPerPage: 5,
    paginationVariant:'pages',
    // paginationVariant:'simple',
    enableFiltering: true,
    visibleColumns: [
      "invoice_number",
      "issue_date",
      "due_date",
      "total_amount",
      "amount_due",
      // "status"
    ]},
  });
})

</script>

<template>
  <div ref="root"/>
</template>
