<template>
  <transition-group
    name="list"
    tag="div"
    mode="out-in"
    :class="['cards-list', modifier && `cards-list--${modifier}`]"
    appear
  >
    <slot />
  </transition-group>
</template>

<script>
export default {
  name: "DefaultView",
  props: ["modifier"],
};
</script>

<style lang="scss">
.cards-list {
  columns: 4;
  column-gap: 44px;
  @media only screen and (max-width: 1440px) {
    columns: 3;
    column-gap: 24px;
  }
  @media only screen and (max-width: 1024px) {
    columns: 2;
  }
  @media only screen and (max-width: 767px) {
    columns: 1;
  }
  &--favorites {
    padding-top: 32px;
  }
  & > * {
    break-inside: avoid;
  }
}

.list-enter-active {
  transition: opacity 0.3s, transform 0.2s ease-out;
}

@for $i from 1 through 100 {
  .list-enter-active:nth-child(#{$i}) {
    transition-delay: $i * 0.012s;
  }
}

.list-leave-active {
  transition: opacity 0.03s, transform 0.03s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}
</style>