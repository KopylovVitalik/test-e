<template>
  <default-view>
    <image-group
      class="album-card"
      v-for="(value, key) in list"
      :key="key"
      :list="value"
      :title="key"
    />
  </default-view>
</template>

<script>
import ImageGroup from "@/components/image-group";
import DefaultView from "@/components/views/default-view";
export default {
  name: "AlbumView",
  components: { ImageGroup, DefaultView },
  props: ["list"],
};
</script>

