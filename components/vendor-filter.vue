<template>
  <div class="vendor-filter">
    <div class="vendor-filter__header">
      <filter-controls
        @setFilterType="setFilterType"
        :filter="filter"
        :filterType="filterType"
      />
    </div>
    <div class="vendor-filter__scroll-wrap">
      <div class="vendor-filter__scroll">
        <div class="vendor-filter__list">
          <favorites-view
            v-if="filterType === 'favoritesView'"
            :list="imagesList"
          />
          <album-view v-if="filterType === 'albumView'" :list="imagesList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "Vuex";
import AlbumView from "./album-view.vue";
import FavoritesView from "./favorites-view.vue";
import FilterControls from "./filter-controls.vue";
export default {
  props: ["list"],
  components: {
    FavoritesView,
    AlbumView,
    FilterControls,
  },
  data() {
    return {
      filterType: "albumView",
      imagesList: [],
      filter: [
        {
          title: "A-Z",
          type: "albumView",
        },
        {
          title: "Favorites",
          type: "favoritesView",
        },
      ],
    };
  },
  methods: {
    setFilterType(type) {
      localStorage.setItem("filterType", type);
      this.filterType = type;
    },
  },
  mounted() {
    const filterType = localStorage.getItem("filterType");
    if (filterType) this.filterType = filterType;

    const favList = localStorage.getItem("favoritesList");
    if (favList) {
      console.log(favList);
      this.$store.commit("INIT_FAVORITES_LIST", JSON.parse(favList));
    }
  },
  async fetch() {
    const res = await this.$axios.$get(
      "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100"
    );
    this.imagesList = res;
  },
};
</script>

<style lang="scss">
.vendor-filter {
  font-weight: 700;
  font-family: Open Sans, Roboto, sans-serif;
  width: 1300px;
  height: 600px;
  margin: auto;
  padding: 3.6rem 4.8rem 6rem;
  font-size: 1.2rem;
  background: #ffffff;
  border-radius: 1.2rem;
  box-sizing: border-box;

  &__header {
    margin: 0 0 1.5rem;
  }

  &__title {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.9rem;
  }

  &__name {
    margin: 0 0.5rem;
    text-decoration: underline;
    cursor: pointer;
  }

  &__scroll-wrap {
    overflow: hidden;
  }

  &__scroll {
    width: 100%;
    // magic
    // max-height: 50vh;
    max-height: 460px;
    overflow-y: auto;
  }

  &__list {
    position: relative;
  }
}
</style>
