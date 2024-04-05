<script>
export default {
  props: {
    transplant: Object,
  },
  methods: {
    updateTransplant() {
      window.scrollTo(0, 0);
      this.$emit('update:transplant', this.transplant.id);
    },
    emitOnlyCurrentTransplant() {
      window.scrollTo(0, 0);
      this.$emit('onlyCurrentTransplant', this.transplant);
    }
  }
}
</script>

<template>
  <div class="transplant flex gap-5">
    <input 
      :checked="transplant.active"
      @change="updateTransplant" 
      type="radio"
      class="transplant-checkbox hidden peer"
      name="transplant" 
      :id="transplant.id"
      v-if="transplant.id === 1"
    />
    <input 
      :checked="transplant.active"
      @change="updateTransplant" 
      type="checkbox" 
      class="transplant-checkbox hidden peer"
      name="transplant" 
      :id="transplant.id"
      v-else
    />
    <label 
      :for="transplant.id" 
      class="flex items-center gap-[10px] flex-1 cursor-pointer p-3 rounded-xl group hover-hover:hover:bg-light-blue duration-200 sm:text-lg text-sm before:content-[''] before:w-[20px] before:h-[20px] before:border before:border-gray before:bg-check before:duration-200 before:bg-[length:0px_0px] before:bg-center before:bg-no-repeat before:rounded-md peer-checked:before:border-blue peer-checked:before:bg-check peer-checked:before:bg-[length:15px_15px] peer-checked:before:bg-light-blue peer-checked:before:bg-center peer-checked:before:bg-no-repeat"
    >
      <div class="flex-1">{{ transplant.name }}</div>
      <div 
        class="hidden text-blue hover-hover:group-hover:block h-full"
        @click.prevent="emitOnlyCurrentTransplant"
      >
        Только
      </div>
    </label>
  </div>
</template> 