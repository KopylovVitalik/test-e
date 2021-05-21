<template>
  <popup-container :list="imagesList"></popup-container>
</template>

<script>
import PopupContainer from "@/components/popup-container";

export default {
  components: { PopupContainer },
};
</script>

<style lang="scss">
body {
  background-image: url("../static/img/bg.jpg");
}
</style>
