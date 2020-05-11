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
    <div id="bg_music">
      <div id="audio-btn" @click="changeOn" :class="isOff ? 'off' : 'on'">
        <audio src="@/assets/music.mp3" id="media" autoplay></audio>
      </div>
    </div>
    <div class="page-warp page1-bg"></div>
    <div class="page1-page-box">
      <div class="page1-group page1-content">
        <div class="page1-group-box">
          <router-link tag="div" to="/page1/njh" class="page1-group page1-btn">
            <div class="page1-group-box">
              <div class="page1-img">
                <img src="@/assets/img/img01.png" alt="img01" />
              </div>
            </div>
          </router-link>
          <div class="page1-img page1-fz-content">
            <img src="@/assets/img/img0b.png" alt="img0b" />
          </div>
          <div class="rulediv">
            <img
              :src="require('@/assets/img/b' + ruleimg + '.png')"
              class="sizeimg"
            />
            <audio
              :src="require('@/assets/mp3/p2-' + ruleimg + '.mp3')"
              class="media audio"
              ref="audio"
            ></audio>
          </div>
          <div class="page1-group page1-click-btn">
            <div class="page1-group-box">
              <div
                class="page1-group"
                v-for="(item, index) in items"
                :key="index"
                @click="changeOnVice(item)"
                :class="item.ids == num ? 'active' : ''"
              >
                <div class="page1-group-box">
                  <div class="page1-img" ref="pageImgBtns">
                    <img
                      class="pageImgBtns"
                      :src="
                        item.ids == num
                          ? require('@/assets/img/img0' + item.url + '.gif')
                          : require('@/assets/img/img0' + item.url + '.png')
                      "
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page1-img page1-click-voice">
            <img src="@/assets/img/img0j.png" alt="img0j" />
          </div>
          <div class="page1-img page1-click-handle">
            <img src="@/assets/img/img0k.png" alt="img0k" />
          </div>
        </div>
      </div>
      <div class="page1-img-content page1-img">
        <img src="@/assets/img/p201.png" alt="p201" />
      </div>
      <div class="page1-img-content page1-img">
        <img src="@/assets/img/img0l.png" alt="img0l" />
      </div>
      <div class="page1-img-content page1-img">
        <img src="@/assets/img/img0m.png" alt="img0m" />
      </div>
    </div>
    <router-link class="swiper-next" tag="div" to="/page2/">
      <div class="page-arrow">
        <img src="@/assets/img/arrow.png" alt="arrow" />
      </div>
    </router-link>
  </div>
</template>
<script>
import Bgm from "@/components/Bgm";
export default {
  name: "Njh",
  data() {
    return {
      num: -1,
      items: [
        { pid: "7", url: "c", ids: 1 },
        { pid: "6", url: "d", ids: 2 },
        { pid: "5", url: "e", ids: 3 },
        { pid: "3", url: "f", ids: 4 },
        { pid: "4", url: "g", ids: 5 },
        { pid: "1", url: "i", ids: 6 },
      ],
      ruleimg: "1",
      isOff: false,
    };
  },
  mounted() {
    // 自动播放音乐效果，解决微信自动播放问题
    document.addEventListener("touchstart", this.audioAutoPlay, false);
    document.addEventListener("WeixinJSBridgeReady", this.audioAutoPlay, false);
    let oAudio = document.querySelector("#media");
    oAudio.onended = function() {
      //播放完毕，重新循环播放
      oAudio.load();
      oAudio.play();
    };
  },
  components: {
    Bgm,
  },
  methods: {
    changeOn() {
      let oAudio = document.querySelector("#media");
      oAudio.pause();
      if (this.isOff) {
        oAudio.play(); //让音频文件开始播放
      } else {
        oAudio.pause(); //让音频文件暂停播放
      }
      this.isOff = !this.isOff;
    },
    audioAutoPlay() {
      let audio = document.getElementById("media");
      this.isOff = false;
      audio.play();
      document.removeEventListener("touchstart", this.audioAutoPlay);
    },
    changeOnVice(item) {
      //显示介绍图片
      let sizeimg = document.querySelector(".sizeimg");
      sizeimg.style.display = "block";
      let media = document.querySelector(".media");
      return (this.ruleimg = item.pid), (this.num = item.ids), media.play();
    },
    onSwipeUp() {
      this.$router.push("/page2");
    },
    onSwipeDowm() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="less">
#bg_music {
  position: absolute;
  z-index: 1992;
  display: block;
  width: 28px;
  height: 28px;
  top: 10px;
  right: 10px;
  #audio-btn {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
  }
  .on {
    background: url("~@/assets/img/playing_1.svg") no-repeat 0 0;
    -webkit-animation: rotating 1.2s linear infinite;
    animation: rotating 1.2s linear infinite;
  }
  .off {
    background: url("~@/assets/img/paused_18.svg") no-repeat 0 0;
  }
}
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.page1-bg {
  background-image: url("~@/assets/img/bg01.png");
}
.page1-page-box {
  width: 100%;
  min-height: 100%;
  position: relative;
  .page-img {
    background-size: cover;
    background-position: 50%;
    img {
      width: 100%;
      pointer-events: none;
      display: block;
    }
  }
  .page1-group {
    background-size: cover;
    .page1-group-box {
      width: 100%;
      min-height: 100%;
      position: relative;
    }
  }
  .page1-content {
    height: 22.24rem;
    left: 2.848rem;
    position: absolute;
    top: 10.912rem;
    width: 18.976rem;
  }
  .page1-btn {
    animation: fadeInUp 1000ms 2000ms both;
    position: absolute;
    left: 6.5rem;
    top: 22.5rem;
    width: 6.2rem;
    height: 2rem;
    z-index: 999;
    .page1-group-box {
      .page1-img:nth-child(1) {
        height: 1.792rem;
        left: 0rem;
        position: absolute;
        bottom: 0rem;
        width: 6.144rem;
      }
      .page1-img:nth-child(2) {
        height: 1.792rem;
        left: 0rem;
        position: absolute;
        bottom: 0rem;
        width: 6.144rem;
      }
    }
  }
  .page1-img {
    background-size: cover;
    background-position: 50%;
    img {
      width: 100%;
      pointer-events: none;
      display: block;
    }
  }
  .page1-fz-content {
    animation: puffIn 1000ms 300ms both;
    height: 19.232rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 18.304rem;
  }
  .rulediv {
    position: absolute;
    left: 0;
    top: 0;
    width: 52%;
    z-index: 999;

    .sizeimg {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
  .rulediv.active {
    display: block;
  }
  .page1-click-btn {
    height: 17.088rem;
    left: 1.216rem;
    position: absolute;
    top: 1.248rem;
    width: 17.76rem;
    .page1-group.active {
      .page1-img {
        animation: fadeIn 1000ms 0ms both;
        transform: scale3d(1.5, 1.5, 1.5);
      }
    }
    .page1-group:nth-child(1) {
      animation: fadeIn 1000ms 1400ms both;
      height: 1.536rem;
      left: 11.584rem;
      position: absolute;
      top: 15.552rem;
      width: 4.48rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.48rem;
      }
    }
    .page1-group:nth-child(2) {
      animation: fadeIn 1000ms 900ms both;
      height: 1.536rem;
      left: 0;
      position: absolute;
      top: 13.056rem;
      width: 4.448rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.448rem;
      }
    }
    .page1-group:nth-child(3) {
      animation: fadeIn 1000ms 1600ms both;
      height: 1.536rem;
      left: 4.576rem;
      position: absolute;
      top: 9.376rem;
      width: 4.448rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.448rem;
      }
    }
    .page1-group:nth-child(4) {
      animation: fadeIn 1000ms 1100ms both;
      height: 1.536rem;
      left: 11.488rem;
      position: absolute;
      top: 10.496rem;
      width: 4.48rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.48rem;
      }
    }
    .page1-group:nth-child(5) {
      animation: fadeIn 1000ms 1000ms both;
      height: 1.536rem;
      left: 0.16rem;
      position: absolute;
      top: 2.656rem;
      width: 4.48rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.48rem;
      }
    }
    .page1-group:nth-child(6) {
      animation: fadeIn 1000ms 1300ms both;
      height: 1.536rem;
      left: 13.28rem;
      position: absolute;
      top: 2.656rem;
      width: 4.48rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.48rem;
      }
    }
    .page1-group:nth-child(7) {
      animation: fadeIn 1000ms 1700ms both;
      height: 1.536rem;
      left: 10.912rem;
      position: absolute;
      top: 0;
      width: 4.48rem;
      .page1-img {
        height: 1.536rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 4.48rem;
      }
    }
  }
  .page1-click-voice {
    animation: fadeIn 1000ms 1900ms both;
    height: 1.536rem;
    left: 3.296rem;
    position: absolute;
    top: 20.704rem;
    width: 11.68rem;
  }
  .page1-click-handle {
    animation: fadeIn 1000ms 1900ms both;
    height: 1.088rem;
    left: 4.096rem;
    position: absolute;
    top: 20.832rem;
    width: 0.672rem;
    img {
      -webkit-animation: twinkling 0.6s infinite ease-in-out;
      animation: twinkling 0.6s infinite ease-in-out;
    }
  }
  .page1-img-content:nth-child(2) {
    animation: fadeInUp 1000ms 2200ms both;
    bottom: 1.528rem;
    height: 2.912rem;
    left: 4.032rem;
    position: absolute;
    width: 16.896rem;
  }
  .page1-img-content:nth-child(3) {
    animation: fadeInRight 1000ms 100ms both;
    height: 4.8rem;
    left: 12rem;
    position: absolute;
    top: 2.528rem;
    width: 5.088rem;
  }
  .page1-img-content:nth-child(4) {
    animation: fadeInLeft 1000ms 100ms both;
    height: 4.8rem;
    left: 6.912rem;
    position: absolute;
    top: 2.528rem;
    width: 5.056rem;
  }
}
</style>
