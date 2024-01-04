import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./axios";

export const getApi = async (
  url: string,
  config?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url, config);
};

export const postApi = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url, data, config);
};

export const deleteApi = async (
  url: string,
  config?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> => {
  return await axios.delete(url, config);
};

export const patchApi = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<any, any>> => {
  return await axios.patch(url, data, config);
};