import { IEndTypes, IIsEndTypes } from "@/typings/config";
import { IHttp } from "@/typings/api";
import { getEndType } from "@/libs/utils";

export const END_TYPES: IEndTypes = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export const HTTP: IHttp = {
  BASE_URL: "http://www.niubi.com",
  TIME_OUT: 3000,
};

export const IS_END_TYPES: IIsEndTypes = {
  IS_MOBILE: getEndType() === END_TYPES.MOBILE,
  IS_DESKTOP: getEndType() === END_TYPES.DESKTOP,
};
