<template>
  <div id="bg_music">
    <div id="audio-btn" @click="changeOn" :class="isOff ? 'off' : 'on'">
      <audio src="@/assets/music.mp3" id="media" autoplay></audio>
    </div>
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
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
  },
};
</script>

<style lang="less" scoped>
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
</style>
