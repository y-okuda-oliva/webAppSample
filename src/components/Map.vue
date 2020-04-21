<template>
  <div id="map">
    <div
      id="map-overlay"
      v-show="dialogShow && !initMode"
      @click.self="markerClick(false, 0)"
    >
      <div id="map-dialog">
        <p>{{ parlorList[selectNum].name }}</p>
        <!-- <p>ここに何か情報を出す</p> -->
        <v-calendar :attributes="attrs" class="calender"></v-calendar>
        <button class="" @click="gotoSite">
          p-world サイトへ移動
        </button>
      </div>
    </div>
    <l-map
      ref="mapObj"
      :zoom="zoom"
      :center="center"
      :minZoom="8"
      :maxZoom="18"
      :preferCanvas="true"
      @click="mapClick"
    >
      <l-tile-layer
        url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        :tms="false"
      ></l-tile-layer>
      <div v-for="(value, key) in parlorList" v-bind:key="key">
        <l-marker
          :latLng="value.latLng"
          @click="markerClick(true, key)"
          :icon="markerIcon"
        >
        </l-marker>
      </div>
      <l-marker
        v-if="!initJitaku"
        :latLng="jitakuLatLng"
        :icon="markerMutant"
        @click="jitakuClick"
      >
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    // L,
  },
  data() {
    return {
      dialogShow: false,
      markerIcon: L.icon({
        iconUrl: require("../../public/img/pinIcon.png"),
        iconSize: [40, 40],
      }),
      markerMutant: L.icon({
        iconUrl: require("../../public/img/mutant_icon.png"),
        iconSize: [60, 40],
      }),
      parlorList: [
        // {
        //   name: "スロット専門店エクサ",
        //   url: "https://www.p-world.co.jp/tokyo/ekusa.htm",
        //   latLng: [35.7765, 139.634],
        // },
        // {
        //   name: "コンサートホール成増スロット館",
        //   url: "https://www.p-world.co.jp/tokyo/concert-narimasu2.htm",
        //   latLng: [35.777, 139.633],
        // },
        // {
        //   name: "ミリオン成増７号店",
        //   url: "https://www.p-world.co.jp/tokyo/m7.htm",
        //   latLng: [35.7775, 139.631],
        // },
      ],
      sendUrl: "",
      selectNum: 0,
      jitaku: [0, 0],
      attrs: [
        {
          key: "today",
          highlight: {
            backgroundColor: "#ff8080",
          },
          dates: new Date(),
          popover: {
            label: "メッセージを表示できます",
          },
        },
      ],
    };
  },
  mounted() {
    this.getParlorInfo();
  },
  computed: {
    zoom() {
      return this.$store.state.zoom;
    },
    center() {
      return this.$store.state.center;
    },
    iconImg() {
      return require("../../public/img/pinIcon.png");
    },
    initMode() {
      return this.$store.state.initMode;
    },
    jitakuLatLng() {
      return this.$store.state.jitakuLatLng;
      // return [35.7764260383622,139.62897777557376]
    },
    initJitaku() {
      return this.$store.state.initJitaku;
    },
  },
  methods: {
    markerClick(show, key) {
      this.dialogShow = show;
      this.selectNum = key;
    },
    gotoSite() {
      window.open(this.parlorList[this.selectNum].url);
    },
    mapClick(obj) {
      if (this.$store.state.initJitaku) {
        window.localStorage.setItem("lat", obj.latlng.lat);
        window.localStorage.setItem("lng", obj.latlng.lng);
        this.$store.state.jitakuLatLng = [obj.latlng.lat, obj.latlng.lng];
        this.$store.state.initJitaku = false;
      }
    },
    jitakuClick() {
      this.$refs.mapObj.mapObject.setView(this.$store.state.jitakuLatLng, 15);
    },
    getParlorInfo() {
      const req = new XMLHttpRequest();
      let message = "";
      req.open("GET", "/parlerlist", false);
      req.onload = function() {
        message = JSON.parse(req.responseText);
      };
      req.send(null);
      this.parlorList = message;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
  position: absolute;
  /* width: 98%; */
  /* height: 500px; */
  height: calc(100% - 100px);
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* justify-content: center; */
}
#map-overlay {
  z-index: 5000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#map-dialog {
  position: absolute;
  z-index: 5100;
  width: 90%;
  height: 350px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  border-radius: 10px;
  bottom: 10px;
  padding: 1em;
  background: #fff;
}
.calender {
  align-items: center;
  text-align: center;
  margin: 10px auto;
}
</style>
