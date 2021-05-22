<template>
  <div class="wrap" @click.self="closeModal">
    <vendor-filter v-if="$store.state.modalOpen" />
    <modal-open v-if="!$store.state.modalOpen" />
    <div class="wrap__bg"></div>
  </div>
</template>

<script>
import VendorFilter from "@/components/vendor-filter";
import ModalOpen from "@/components/ui/modal-open";

export default {
  components: { VendorFilter, ModalOpen },
  methods: {
    closeModal() {
      this.$store.commit("CHANGE_MODAL_STATE", false);
    },
  },
};
</script>

<style lang="scss">
.wrap {
  position: relative;
  height: 100vh;
  display: flex;
  &__bg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: rgba(27, 32, 79, 0.2);
  }
}
</style>
