<script>
export default {
  props: {
    wallet: Object,
  },
  methods: {
    updateWallet() {
      this.$emit('update:wallet', this.wallet.id);
    },
  },
}
</script>

<template>
  <div class="wallet">
    <input 
      :checked="wallet.active"
      @change="updateWallet" 
      type="radio" 
      class="hidden peer/input" 
      name="wallet"
      :id="wallet.name"
    />
    <label 
      :for="wallet.name"
      class="sm:px-[30px] py-[15px] border-[1px] block cursor-pointer border-gray hover:bg-light-blue rounded-xl group-first:rounded-r-none group-last:rounded-l-none group-first:border-r-0 group-[&:not(:last-child):not(:first-child)]:rounded-r-none group-[&:not(:last-child):not(:first-child)]:rounded-l-none group-[&:not(:last-child):not(:first-child)]:border-r-0 duration-200 sm:text-lg text-sm px-[25px] peer-checked/input:bg-blue peer-checked/input:text-white"
    >
      {{ wallet.name }}
    </label>
  </div>
</template>