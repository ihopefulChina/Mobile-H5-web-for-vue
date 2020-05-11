<template>
  <div id="main" v-touch:down="onSwipeDowm" v-touch:right="onSwipeDowm">
    <transition>
      <router-view></router-view>
    </transition>
    <Bgm />
    <div class="page-warp page3-bg"></div>
    <div class="page3-page-box">
      <div class="page3-group page3-group-content1">
        <div class="page3-group-box">
          <div class="page3-group page3-bg-content">
            <div class="page3-group-box">
              <div class="page3-img">
                <img src="@/assets/img/img1j.png" alt="img1j" />
              </div>
            </div>
          </div>
          <div class="page3-bg-content-img">
            <div class="page3-img">
              <img src="@/assets/img/p7-8.png" alt="p7-8" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-7.png" alt="p7-7" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-6.png" alt="p7-6" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-5.png" alt="p7-5" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-4.png" alt="p7-4" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-3.png" alt="p7-3" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-2.png" alt="p7-2" />
            </div>
            <div class="page3-img">
              <img src="@/assets/img/p7-1.png" alt="p7-1" />
            </div>
            <div class="page3-group page3-form">
              <div class="page3-group-box">
                <div class="page3-img page3-form-add">
                  <img src="@/assets/img/add2.png" alt="add2" />
                </div>
                <div class="page3-group page3-form-name">
                  <div class="page3-group-box">
                    <div class="page3-img">
                      <img src="@/assets/img/img1p.png" alt="img1p" />
                    </div>
                    <input name="name" type="text" class="node-input" />
                  </div>
                </div>
                <div class="page3-group page3-form-tel">
                  <div class="page3-group-box">
                    <div class="page3-img">
                      <img src="@/assets/img/img1q.png" alt="img1q" />
                    </div>
                    <input name="tel" type="tel" class="node-input" />
                  </div>
                </div>
                <div class="page3-img page3-form-sub">
                  <img src="@/assets/img/img1r.png" alt="img1r" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page3-group page3-group-content2">
        <div class="page3-group-box">
          <div class="page3-group page3-address">
            <div class="page3-group-box page3-address-box">
              <div class="page3-img">
                <img src="@/assets/img/img1s.png" alt="img1s" />
              </div>
              <div class="page3-img">
                <img src="@/assets/img/img1t.png" alt="img1t" />
              </div>
            </div>
          </div>
          <a href="tel:025-58827999"
            ><div class="page3-group">
              <div class="page3-group-box">
                <div class="page3-img">
                  <img src="@/assets/img/img1u.png" alt="img1u" />
                </div>
                <div class="page3-img">
                  <img src="@/assets/img/img1v.png" alt="img1v" />
                </div>
              </div></div
          ></a>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import Bgm from "@/components/Bgm";

export default {
  name: "Page3",
  data() {
    return {};
  },
  components: {
    Bgm,
  },
  methods: {
    onSwipeDowm() {
      this.$router.push("/page2");
    },
  },
};
</script>
<style scoped lang="less">
.page3-bg {
  background-image: url("~@/assets/img/bg01.png");
}
.page3-page-box {
  width: 100%;
  min-height: 100%;
  position: relative;
  .page3-img {
    background-size: cover;
    background-position: 50%;
    img {
      width: 100%;
      pointer-events: none;
      display: block;
    }
  }
  .page3-group {
    background-size: cover;
    .page3-group-box {
      width: 100%;
      min-height: 100%;
      position: relative;
    }
  }
  .page3-group-content1 {
    height: 40.96rem;
    left: -0.032rem;
    position: absolute;
    top: -0.032rem;
    width: 24rem;
    .page3-bg-content {
      height: 40.96rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 24rem;
      .page3-img {
        animation: fadeIn 1200ms linear both;
        height: 40.96rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 24rem;
      }
    }
    .page3-bg-content-img {
      .page3-img:nth-child(1) {
        animation: fadeInLeft 1000ms 1100ms both;
        height: 2.72rem;
        left: 0.896rem;
        position: absolute;
        top: 22.528rem;
        width: 5.12rem;
      }
      .page3-img:nth-child(2) {
        animation: fadeInDown 1000ms 1100ms both;
        height: 1.312rem;
        left: 8.992rem;
        position: absolute;
        top: 14.976rem;
        width: 6.016rem;
      }
      .page3-img:nth-child(3) {
        animation: fadeInDown 1000ms 900ms both;
        height: 0.96rem;
        left: 3.136rem;
        position: absolute;
        top: 13.472rem;
        width: 17.984rem;
      }
      .page3-img:nth-child(4) {
        animation: fadeInLeft 1000ms 500ms both;
        height: 3.488rem;
        left: 12.512rem;
        position: absolute;
        top: 9.44rem;
        width: 10.304rem;
      }
      .page3-img:nth-child(5) {
        animation: fadeInRight 1000ms 500ms both;
        height: 3.04rem;
        left: 1.472rem;
        position: absolute;
        top: 9.92rem;
        width: 10.176rem;
      }
      .page3-img:nth-child(6) {
        animation: puffIn 1000ms 400ms both;
        height: 4.384rem;
        left: 7.68rem;
        position: absolute;
        top: 3.936rem;
        width: 8.96rem;
      }
      .page3-img:nth-child(7) {
        animation: fadeIn 1000ms 200ms both;
        height: 0.8rem;
        left: 17.184rem;
        position: absolute;
        top: 1.344rem;
        width: 5.44rem;
      }
      .page3-img:nth-child(8) {
        animation: fadeIn 1000ms 100ms both;
        height: 0.768rem;
        left: 1.696rem;
        position: absolute;
        top: 1.408rem;
        width: 4.384rem;
      }
      .page3-form {
        animation: fadeInUp 1000ms 1500ms both;
        height: 5.792rem;
        left: 5.408rem;
        position: absolute;
        top: 30rem;
        width: 13.28rem;
        .page3-form-add {
          position: absolute;
          left: 4.4rem;
          top: -2rem;
          width: 5.6rem;
        }
        .page3-form-name {
          height: 1.216rem;
          left: 0;
          position: absolute;
          top: 0;
          width: 13.28rem;
          .page3-img {
            height: 0.8rem;
            left: 0;
            position: absolute;
            top: 0.192rem;
            width: 3.2rem;
          }
          input {
            background: transparent;
            font-family: "微软雅黑";
            font-size: 0.9rem;
            border: none;
            outline: none;
            padding: 0 0.3rem;
            background-size: 100% 100%;
            background-image: url(~@/assets/img/name.png);
            background-repeat: no-repeat;
            background-size: contain;
            height: 1.216rem;
            left: 4rem;
            position: absolute;
            top: 0;
            width: 9.28rem;
          }
        }
        .page3-form-tel {
          height: 1.184rem;
          left: 0;
          position: absolute;
          top: 1.856rem;
          width: 13.28rem;
          .page3-img {
            height: 0.8rem;
            left: 0;
            position: absolute;
            top: 0.128rem;
            width: 3.264rem;
          }
          input {
            background: transparent;
            font-family: "微软雅黑";
            font-size: 0.9rem;
            border: none;
            outline: none;
            padding: 0 0.3rem;
            background-size: 100% 100%;
            background-image: url(~@/assets/img/tel.png);
            background-repeat: no-repeat;
            background-size: contain;
            height: 1.184rem;
            left: 4rem;
            position: absolute;
            top: 0;
            width: 9.28rem;
          }
        }
        .page3-form-sub {
          height: 1.728rem;
          left: 4.4rem;
          position: absolute;
          top: 4.064rem;
          width: 4.544rem;
        }
      }
    }
  }
  .page3-group-content2 {
    bottom: 1rem;
    height: 1.312rem;
    left: 4.704rem;
    position: absolute;
    width: 14.528rem;
    .page3-address {
      animation: fadeInLeft 1000ms 1800ms both;
      height: 1.184rem;
      left: 0;
      position: absolute;
      top: 0;
      width: 4.288rem;
    }
    .page3-address-box {
      .page3-img:nth-child(1) {
        height: 0.8rem;
        left: 1.024rem;
        position: absolute;
        top: 0.384rem;
        width: 3.264rem;
      }
      .page3-img:nth-child(2) {
        animation: fadeInDown1 1200ms linear infinite both;
        animation-direction: alternate;
        height: 1.184rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 0.704rem;
      }
    }
    a {
      background-color: transparent;
      .page3-group {
        animation: fadeInRight 1000ms 1800ms both;
        height: 1.088rem;
        left: 9.664rem;
        position: absolute;
        top: 0.224rem;
        width: 4.864rem;
        .page3-img:nth-child(1) {
          animation: fadeInRight 1000ms 1800ms both;
          height: 1.088rem;
          left: 0;
          position: absolute;
          top: 0;
          width: 4.864rem;
        }
        .page3-img:nth-child(2) {
          animation: tada 2200ms linear infinite both;
          height: 1.088rem;
          left: 0;
          position: absolute;
          top: 0;
          width: 1.088rem;
        }
      }
    }
  }
}
</style>
