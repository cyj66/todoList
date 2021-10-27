import { http } from "./http";
import { url } from "./url";

export async function elementStyle() {
  const data = await http.get(url.getStyle);
  return data;
}
