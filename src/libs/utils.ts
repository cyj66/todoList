/*
 * @Author: ChenYongJia
 * @Date: 2021-10-20 10:59:16
 * @LastEditors: ChenYongJia
 * @LastEditTime: 2021-10-20 13:46:46
 * @Description:
 */
import { END_TYPES } from "@/config";
export function getEndType(): string {
  const endIsMobile: RegExpMatchArray | null = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return endIsMobile ? END_TYPES.MOBILE : END_TYPES.DESKTOP;
}
