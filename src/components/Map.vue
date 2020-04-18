<template>
  <div id="map">
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
      <l-marker :latLng="center" > </l-marker>
    </l-map>
  </div>
</template>

<script>
import  L  from "leaflet";
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
      return 12;
    },
    center() {
      return [35.55, 139.74];
    },
    iconImg() {
      return require('../../public/img/pinIcon.png');
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>
