<script>
import ComponentTransplant from './ComponentTransplant.vue';

export default {
  components: {ComponentTransplant},
  props: {
    transplants: Array,
  },
  methods: {
    updateTransplant(id) {
      this.$emit('update:transplant', id);
    },
    emitOnlyCurrentTransplant(transplant) {
      this.$emit('onlyCurrentTransplant', transplant)
    }
  },
}
</script>

<template>
  <div class="transplants">
    <h2 class="transplants__title mb-[10px] text-lg">Количество пересадок</h2>
    <div class="transplants__list flex flex-col gap-3">
      <component-transplant 
        v-for="transplant in transplants" 
        :transplant="transplant" 
        @update:transplant="updateTransplant"
        @only-current-transplant="emitOnlyCurrentTransplant"
      />
    </div>
  </div>
</template>