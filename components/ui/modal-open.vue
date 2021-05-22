<template>
  <button class="open-btn" @click="openModal">Open Images Filter</button>
</template>

<script>
export default {
  name: "ModalOpen",
  methods: {
    openModal() {
      this.$store.commit("CHANGE_MODAL_STATE", true);
    },
  },
};
</script>

<style lang="scss">
.open-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--accentColor);
  color: var(--white);
  border: none;
  z-index: 1000;
  display: inline-block;
  padding: 20px 40px;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  letter-spacing: 0.03em;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
}
</style>