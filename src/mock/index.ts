//要安装@types/mockjs依赖，否则会报无法找到模块“mockjs”的声明文件。
import Mock from "mockjs";
import { HTTP } from "@/config";
import { url } from "@/api/url";

Mock.mock(HTTP.BASE_URL + url.getStyle, {
  htmlCSS: "#ccc",
  headCSS: "pink",
  listPosition: "center",
});

Mock.setup({
  timeout: "200-600",
});
