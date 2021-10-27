<template>
  <button :class="['button-base', isMobile ? 'mobile' : 'desktop']">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    text: String,
  },
  components: {},
});
</script>

<style lang="scss" scoped>
@import "@/style/common.base.scss";
.button-base {
  text-align: center;
  color: white;
}
.button-base.mobile {
  width: convert(90);
  height: convert(20);
  line-height: convert(20);
  font-size: convert(14);
}
.button-base.desktop {
  width: 100px;
  height: 40px;
  line-height: 40px;
}
</style>
