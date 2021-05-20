<template>
  <div class="filter-controls">
    <div class="filter-controls__title">Filter by:</div>
    <div
      class="filter-controls__control"
      v-for="item in filter"
      :key="item.type"
    >
      <button
        :class="['control-btn', item.type === filterType && 'is-active']"
        v-text="item.title"
        @click="changeFilterType(item.type)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["filter", "filterType"],
  methods: {
    changeFilterType(type) {
      this.$emit("setFilterType", type);
    },
  },
};
</script>

<style lang="scss">
.filter-controls {
  display: flex;
  align-items: center;
  &__control {
    & + .filter-controls__control {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background: #dedee5;
      }
    }
  }
}

.control-btn {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #1c214c;
  background: none;
  border: none;
  &.is-active {
    color: var(--accentColor);
  }
}
</style>