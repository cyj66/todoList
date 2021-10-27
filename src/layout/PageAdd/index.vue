<template>
  <div :class="['add', isMobile ? 'mobile' : 'desktop']">
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
.add {
  @include displayFlex();
  justify-content: center;
}
.add.mobile {
  height: convert(100);
  line-height: convert(100);
}
.add.desktop {
  height: 100px;
  line-height: 100px;
}
</style>
