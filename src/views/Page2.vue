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
    <Bgm />
    <div class="page-warp page2-bg"></div>
    <div class="page2-page-box">
      <div class="page2-img page2-bg-content">
        <img src="@/assets/img/img0n.png" alt="img0n" />
      </div>
      <div class="page2-group page2-group-bootom">
        <div class="page2-group-box">
          <div class="page2-img">
            <img src="@/assets/img/img0o.png" alt="img0o" />
          </div>
          <div class="page2-img">
            <img src="@/assets/img/img0p.png" alt="img0p" />
          </div>
        </div>
      </div>
      <div class="page2-group page2-group-content">
        <div class="page2-group-box">
          <div class="page2-img">
            <img src="@/assets/img/img0q.png" alt="img0q" />
          </div>
          <div class="page2-img">
            <img src="@/assets/img/img0r.png" alt="img0r" />
          </div>
          <div class="page2-img">
            <img src="@/assets/img/img0s.png" alt="img0s" />
          </div>
          <div class="page2-img">
            <img src="@/assets/img/img0t.png" alt="img0t" />
          </div>
          <div class="page2-img">
            <img src="@/assets/img/img0u.png" alt="img0u" />
          </div>
        </div>
      </div>
    </div>
    <router-link class="swiper-next" tag="div" to="/page2/">
      <div class="page-arrow">
        <img src="@/assets/img/arrow.png" alt="arrow" />
      </div>
    </router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Bgm from "@/components/Bgm";
export default {
  name: "Page2",
  data() {
    return {};
  },
  components: {
    Bgm,
  },
  methods: {
    onSwipeUp() {
      this.$router.push("/page3");
    },
    onSwipeDowm() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="less">
.page2-bg {
  background-image: url("~@/assets/img/bg02.png");
}
.page2-page-box {
  width: 100%;
  min-height: 100%;
  position: relative;
  .page2-img {
    background-size: cover;
    background-position: 50%;
    img {
      width: 100%;
      pointer-events: none;
      display: block;
    }
  }
  .page2-bg-content {
    animation: swing1 2200ms linear infinite both;
    animation-direction: alternate;
    transform-origin: 0 0%;
    height: 12.384rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 8.576rem;
  }
  .page2-group {
    background-size: cover;
    .page2-group-box {
      width: 100%;
      min-height: 100%;
      position: relative;
    }
  }
  .page2-group-bootom {
    bottom: 2.528rem;
    height: 15.008rem;
    left: 4.032rem;
    position: absolute;
    width: 16.992rem;
    .page2-img:nth-child(1) {
      animation: fadeInUp 1000ms 1800ms both;
      height: 2.912rem;
      left: 0;
      position: absolute;
      top: 12.096rem;
      width: 16.896rem;
    }
    .page2-img:nth-child(2) {
      animation: fadeInDown 1000ms 1800ms both;
      height: 12.576rem;
      left: 12.224rem;
      position: absolute;
      top: 0;
      width: 4.768rem;
    }
  }
  .page2-group-content {
    height: 24.384rem;
    left: 1.44rem;
    position: absolute;
    top: 3.904rem;
    width: 20.672rem;
    .page2-img:nth-child(1) {
      transform-origin: 0% 100%;
      animation: swashIn1 1000ms 400ms both;
      height: 5.152rem;
      left: 11.2rem;
      position: absolute;
      top: 0;
      width: 9.472rem;
    }
    .page2-img:nth-child(2) {
      animation: fadeInLeft 1000ms 100ms both;
      height: 9.92rem;
      left: 0;
      position: absolute;
      top: 6.848rem;
      width: 20.608rem;
    }
    .page2-img:nth-child(3) {
      animation: fadeInUp 1000ms 800ms both;
      overflow: hidden;
      height: 0.896rem;
      left: 0.384rem;
      position: absolute;
      top: 23.488rem;
      width: 8.896rem;
    }
    .page2-img:nth-child(4) {
      animation: fadeInUp 1000ms 800ms both;
      height: 0.8rem;
      left: 0.384rem;
      position: absolute;
      top: 21.76rem;
      width: 9.792rem;
      overflow: hidden;
    }
    .page2-img:nth-child(5) {
      animation: fadeInUp 1000ms 800ms both;
      height: 0.864rem;
      left: 0.416rem;
      position: absolute;
      top: 20rem;
      width: 9.056rem;
      overflow: hidden;
    }
  }
}
</style>
