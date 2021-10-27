<template>
  <div :class="['list', isMobile ? 'mobile' : 'desktop', listPosition]">
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
.list {
  @include displayFlex();
}
.list.mobile {
  width: 100%;
  height: convert(500);
  justify-content: center;
}
.list.desktop {
  width: 100%;
  height: 500px;
  margin-right: 50px;
  &.left {
    justify-content: flex-start;
  }
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
}
</style>
