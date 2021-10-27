<template>
  <input
    type="text"
    :class="['input-base', isMobile ? 'mobile' : 'desktop']"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  components: {},
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "@/style/common.base.scss";
.input-base {
  border: 1px solid #ccc;
}
.input-base.mobile {
  width: convert(200);
  height: convert(20);
  line-height: convert(20);
}
.input-base.desktop {
  width: 500px;
  height: 40px;
  line-height: 40px;
}
</style>
