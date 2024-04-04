<script>
import ComponentWallet from './ComponentWallet.vue';

export default {
  components: {ComponentWallet},
  props: {
    wallets: Array,
  },
  methods: {
    updateWallet(id) {
      this.$emit('update:wallet', id);
    }
  }
}
</script>

<template>
  <div class="wallets">
    <h2 class="wallets__title mb-[10px] text-lg">Валюта</h2>
    <div class="wallets__list flex">
      <component-wallet 
        v-for="wallet in wallets" 
        :wallet="wallet" class="group" 
        @update:wallet="updateWallet" 
      />
    </div>
  </div>
</template>