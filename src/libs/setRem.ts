export function setRem(doc: Document, win: Window): void {
  const resizeEvt: string =
    "orientationchange" in window ? "orientationchange" : "resize";
  function recalc(): void {
    if (!doc.documentElement.clientWidth) {
      return;
    }
    //20为自己定义的rem基数，375为自己在蓝湖中设定的页面宽度，一般设定为iphone678的 375px
    doc.documentElement.style.fontSize =
      16 * (doc.documentElement.clientWidth / 375) + "px";
  }
  recalc(); //初始化要调用一次
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoad", recalc, false);
}
