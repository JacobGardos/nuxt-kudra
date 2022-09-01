<template>
  <div class="zoom rounded-lg" @click="onClick">
    <img :src="src" class="zoomed-img" width="1280" height="640" alt="" />

    <span style="margin: 10px"> Click the image to view it in fullscreen </span>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      if (window) {
        window.open(this.src);
      }
    },
  },
};
</script>

<style>
.zoom {
  background-color: #141b24;
  transition-delay: 1s;
  transition-property: all;
  transition: transform 0.2s; /* Animation */
  margin-bottom: 32px !important;
  margin-top: 32px !important;
}

.zoom:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.zoomed-img {
  margin-bottom: 10px !important;
  margin-top: 0 !important;
}
</style>
