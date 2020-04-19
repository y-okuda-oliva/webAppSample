<template>
  <div id="map">
    <div id="overlay" v-show="dialogShow" @click.self="markerClick(false)">
      <div id="dialog">
        <p>ダイアログ表示</p>
        <p>ここに何か情報を出す</p>
        </div>
    </div>
    <l-map
      :zoom="zoom"
      :center="center"
      :minZoom="8"
      :maxZoom="18"
      :preferCanvas="true"
    >
      <l-tile-layer
        url="https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png"
        :tms="false"
      ></l-tile-layer>
      <l-marker :latLng="center" @click="markerClick(true)"> </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

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
    dialogShow:false
    }
  },
  mounted() {
    // delete L.Icon.Default.prototype._getIconUrl;
    // L.Icon.Default.mergeOptions({
    //   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    //   iconUrl: require("leaflet/dist/images/marker-icon.png"),
    //   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    // });
  },
  computed: {
    zoom() {
      return 14;
    },
    center() {
      return [35.55, 139.74];
    },
    iconImg() {
      return require("../../public/img/pinIcon.png");
    },
  },
  methods: {
    markerClick(show) {
      this.dialogShow=show;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
position:absolute;
  /* width: 98%; */
  /* height: 500px; */
  height: calc(100% - 75px);
  left:0px;
  right:0px;
  bottom:0px
  /* justify-content: center; */
}
#overlay {
  z-index: 5000;
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#dialog {
  position: absolute;
  z-index:5100;
  width:90%;
  height: 200px;
  /* top: 0px; */
  /* left: 0px; */
  /* right:0px; */
  bottom: 10px;
  padding: 1em;
  background:#fff;
}
</style>
