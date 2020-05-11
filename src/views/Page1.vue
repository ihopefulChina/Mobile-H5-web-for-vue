<template>
  <div
    id="main"
    v-touch:up="onSwipeUp"
    v-touch:down="onSwipeDowm"
    v-touch:left="onSwipeUp"
    v-touch:right="onSwipeDowm"
  >
    <transition>
      <router-view></router-view>
    </transition>
    <router-link class="swiper-next" tag="div" to="/page2/">
      <div class="page-arrow">
        <img src="@/assets/img/arrow.png" alt="arrow" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Page1",
  data() {
    return {};
  },

  methods: {
    onSwipeUp() {
      this.$router.push("/page2");
    },
    onSwipeDowm() {
      this.$router.push("/");
    },
  },
};
</script>
