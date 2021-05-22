<template>
  <div class="vendor-filter">
    <div class="vendor-filter__close">
      <modal-close />
    </div>
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
          <empty-view
            :emptyInfo="emptyInfo"
            v-if="isEmpty && !$fetchState.pending"
          />
          <favorites-view
            v-else-if="filterType === 'favoritesView'"
            :list="favList"
          />
          <album-view v-else :list="albumList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumView from "@/components/views/album-view";
import FavoritesView from "@/components/views/favorites-view";
import EmptyView from "@/components/views/empty-view";
import FilterControls from "@/components/filter-controls";
import ModalClose from "@/components/ui/modal-close";

export default {
  components: {
    AlbumView,
    FavoritesView,
    EmptyView,
    FilterControls,
    ModalClose,
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
      this.filterType = type;
    },
  },
  computed: {
    favList() {
      return this.imagesList.filter((el) =>
        this.$store.state.favoritesListIds.includes(el.id)
      );
    },
    albumList() {
      let albumList = {};
      let list = [...this.imagesList];
      list
        .sort((a, b) => {
          return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
          return 0;
        })
        .forEach((el) => {
          let firstLetter = el.title.toLowerCase().substring(0, 1);
          if (firstLetter in albumList) {
            albumList[firstLetter].push(el);
            return;
          }
          albumList[firstLetter] = [el];
        });
      return albumList;
    },
    isEmpty() {
      return (
        !this.imagesList.length ||
        (this.filterType === "favoritesView" && !this.favList.length)
      );
    },
    emptyInfo() {
      return {
        type: !this.imagesList.length ? "images" : "favorites",
        message: !this.imagesList.length
          ? "No images found"
          : "You added no favorites",
      };
    },
  },
  mounted() {
    const favList = localStorage.getItem("favoritesListIds");
    if (favList) {
      this.$store.commit("INIT_FAVORITES_LIST", JSON.parse(favList));
    }
  },
  async fetch() {
    const res = await this.$axios
      .$get("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=100")
      .then((res) => (this.imagesList = res))
      .catch((err) => (this.imagesList = []));
  },
};
</script>

<style lang="scss">
.vendor-filter {
  max-width: 1300px;
  width: 100%;
  max-height: 600px;
  height: calc(100vh - 16px);
  margin: auto;
  padding: 3.6rem 4.8rem 6rem;
  font-size: 1.2rem;
  background: var(--white);
  border-radius: 1.2rem;
  position: relative;
  font-weight: 700;
  font-family: Open Sans, Roboto, sans-serif;
  @media only screen and (max-width: 1024px) {
    height: calc(100vh - 100px);
    max-height: none;
    margin: 80px auto auto;
    padding: 2.4rem 3rem 3rem;
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

  &__header {
    margin: 0 0 1.5rem;
  }

  &__scroll-wrap {
    overflow: hidden;
    position: relative;
    // &:before,
    // &:after {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   width: 100%;
    //   height: 1.5rem;
    //   backdrop-filter: blur(2px);
    //   z-index: 100;
    //   pointer-events: none;
    // }
    // &:before {
    //   top: 0;
    //   background-image: linear-gradient(to bottom, #fff, rgba(#fff, 0.2));
    // }
    // &:after {
    //   bottom: 0;
    //   background-image: linear-gradient(to top, #fff, rgba(#fff, 0.2));
    // }
  }

  &__scroll {
    width: 100%;
    height: 460px;
    overflow-y: auto;
    @media only screen and (max-width: 1024px) {
      height: calc(100vh - 20rem);
    }
    @media only screen and (max-width: 767px) {
      height: calc(90vh - 11rem);
    }
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 460px;
    @media only screen and (max-width: 1024px) {
      min-height: calc(100vh - 20rem);
    }
    @media only screen and (max-width: 767px) {
      min-height: calc(90vh - 11rem);
    }
  }

  &__close {
    position: absolute;
    top: 24px;
    right: 24px;
  }
}
</style>
