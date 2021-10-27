<template>
  <div :class="['header', isMobile ? 'mobile' : 'desktop']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  components: {},
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/style/common.base.scss";
.header {
  width: 100%;
  text-align: center;
}
.header.mobile {
  height: convert(50);
  line-height: convert(50);
  font-size: convert(20);
}
.header.desktop {
  height: 100px;
  line-height: 100px;
  font-size: 20px;
}
</style>
