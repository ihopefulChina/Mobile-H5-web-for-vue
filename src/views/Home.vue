<template>
  <div id="main">
    <Loading />
    <div class="home-page-box" v-touch:up="onSwipeUp">
      <transition>
        <router-view></router-view>
      </transition>
      <Bgm />
      <div class="page-warp home-page"></div>
      <div class="home-img home-logo">
        <img src="@/assets/img/p101.png" alt="p101" />
      </div>
      <div class="home-btn">
        <div class="home-group-box">
          <router-link tag="div" to="/page1/njh" class="home-img">
            <img src="@/assets/img/img01.png" alt="img01" />
            <div class="home-handle">
              <img src="@/assets/img/shou.png" alt="shou" />
            </div>
          </router-link>
          <router-link tag="div" to="/page1/pth" class="home-img">
            <img src="@/assets/img/img02.png" alt="img02" />
            <div class="home-handle">
              <img src="@/assets/img/shou.png" alt="shou 2" />
            </div>
          </router-link>
        </div>
      </div>
      <div class="home-content">
        <div class="home-group-box">
          <div class="home-img">
            <img src="@/assets/img/img03.png" alt="img03" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img04.png" alt="img04" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img05.png" alt="img05" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img06.png" alt="img06" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img07.png" alt="img07" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img08.png" alt="img08" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img09.png" alt="img09" />
          </div>
          <div class="home-img">
            <img src="@/assets/img/img0a.png" alt="img0a" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bgm from "@/components/Bgm";
import Loading from "@/components/Loading";
export default {
  name: "Home",
  data() {
    return {
      isloading: false,
    };
  },
  components: {
    Bgm,
    Loading,
  },
  methods: {
    onSwipeUp() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="less">
#main {
  width: 100%;
  height: 100%;
  .page-warp {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    background-repeat: no-repeat;
    background-size: cover;
    touch-action: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    .page-warp {
      width: 100%;
      min-height: 100%;
      position: relative;
    }
  }
  .home-page {
    background-image: url("~@/assets/img/bg.png");
  }
  .home-page-box {
    width: 100%;
    min-height: 100%;
    position: relative;
    .home-img {
      background-size: cover;
      background-position: 50%;
      animation: puffIn 1000ms 2100ms both;
      position: absolute;
      left: 0;
      right: 0;
      img {
        width: 100%;
        height: auto;
        pointer-events: none;
        display: none;
      }
    }
    .home-logo {
      bottom: 0.44rem;
      height: auto;
      width: 6.688rem;
      margin: auto;
      img {
        display: block;
      }
    }
    .home-btn {
      background-size: cover;
      height: 1.792rem;
      left: 4.928rem;
      top: 31.768rem;
      width: 14.144rem;
      position: absolute;
      .home-group-box {
        width: 100%;
        min-height: 100%;
        position: relative;
        .home-img {
          background-size: cover;
          background-position: 50%;
          img {
            width: 100%;
            pointer-events: none;
            display: block;
          }
          .home-handle {
            position: absolute;
            right: 0;
            left: 0;
            top: 1rem;
            margin: 0 auto;
            width: 2rem;
            animation: fadeIn 1000ms 1800ms both;
            img {
              -webkit-animation: twinkling 0.6s infinite ease-in-out;
              animation: twinkling 0.6s infinite ease-in-out;
            }
          }
        }
        .home-img:nth-child(1) {
          animation: fadeInUp 1000ms 1800ms both;
          height: 1.792rem;
          left: 8rem;
          position: absolute;
          top: 0;
          width: 6.144rem;
        }
        .home-img:nth-child(2) {
          animation: fadeInUp 1000ms 1600ms both;
          height: 1.792rem;
          left: 0;
          position: absolute;
          top: 0;
          width: 6.176rem;
        }
      }
    }
    .home-content {
      height: 29.92rem;
      left: 1.728rem;
      position: absolute;
      top: 1.696rem;
      width: 17.28rem;
      .home-group-box {
        width: 100%;
        min-height: 100%;
        position: relative;
        .home-img {
          background-size: cover;
          background-position: 50%;
          img {
            width: 100%;
            pointer-events: none;
            display: block;
          }
        }
        .home-img:nth-child(1) {
          animation: fadeInLeft 1000ms 100ms both;
          height: 7.904rem;
          left: 3.264rem;
          position: absolute;
          top: 18.208rem;
          width: 14.016rem;
        }
        .home-img:nth-child(2) {
          animation: fadeInRight 1000ms 100ms both;
          height: 16rem;
          left: 3.264rem;
          position: absolute;
          top: 1.952rem;
          width: 14.016rem;
        }
        .home-img:nth-child(3) {
          animation: puffIn 1000ms 1000ms both;
          height: 6.24rem;
          left: 4.352rem;
          position: absolute;
          top: 22.016rem;
          width: 11.52rem;
        }
        .home-img:nth-child(4) {
          animation: fadeIn 1000ms 300ms both;
          height: 1.376rem;
          left: 1.152rem;
          position: absolute;
          top: 0;
          width: 2.688rem;
        }
        .home-img:nth-child(5) {
          animation: fadeIn 1000ms 700ms both;
          height: 3.072rem;
          left: 0;
          position: absolute;
          top: 18.208rem;
          width: 3.296rem;
        }
        .home-img:nth-child(6) {
          animation: fadeIn 1000ms 600ms both;
          height: 8.16rem;
          left: 1.216rem;
          position: absolute;
          top: 8.672rem;
          width: 1.056rem;
        }
        .home-img:nth-child(7) {
          animation: fadeInLeft 1000ms 1300ms both;
          height: 1.984rem;
          left: 10.944rem;
          position: absolute;
          top: 27.904rem;
          width: 4.896rem;
        }
        .home-img:nth-child(8) {
          animation: fadeInRight 1000ms 1300ms both;
          height: 2.112rem;
          left: 4.672rem;
          position: absolute;
          top: 27.808rem;
          width: 5.472rem;
        }
      }
    }
  }
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes twinkling {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes twinkling {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
