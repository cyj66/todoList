import { IS_END_TYPES } from "@/config";
import store from "@/store";

// const elementStyle = store.state.elementStyle;
export const mixin = {
  computed: {
    isMobile(): boolean {
      return IS_END_TYPES.IS_MOBILE;
    },
    isDesktop(): boolean {
      return IS_END_TYPES.IS_DESKTOP;
    },
    htmlCSS(): string {
      return `background:${store.state.elementStyle.htmlCSS}`;
    },
    headCSS(): string {
      const { headCSS } = store.state.elementStyle;
      return `background:${headCSS}`;
    },
    listPosition(): string {
      return store.state.elementStyle.listPosition;
    },
  },
};
