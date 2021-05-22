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
  &__title {
    margin-right: 6px;
  }
  &__control {
    padding: 0 6px;
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
  font-family: Open Sans, Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: var(--textColor);
  position: relative;
  padding: 0;
  &:hover {
    &:before {
      transform: scale(1);
      transform-origin: 0 50%;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--textColor);
    transform: scale(0);
    transform-origin: 100% 50%;
    transition: transform 0.3s;
  }
  &.is-active {
    color: var(--accentColor);
    pointer-events: none;
    &:before {
      background-color: var(--accentColor);
    }
  }
}
</style>