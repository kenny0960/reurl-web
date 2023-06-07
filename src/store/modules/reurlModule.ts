import axios, { AxiosResponse } from "axios";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import ReurlState from "@/interfaces/ReurlState";
import store from "@/store";
import commonModule from "@/store/modules/commonModule";

@Module({ dynamic: true, store: store, name: "reurlModule" })
class ReurlModule extends VuexModule implements ReurlState {
  public url = "";
  public isUrlValid = true;

  @Mutation
  private SET_URL(url: string): void {
    this.url = url;
  }

  @Mutation
  private SET_URL_VALID(isUrlValid: boolean): void {
    this.isUrlValid = isUrlValid;
  }

  @Action
  public async postUrl(url: string): Promise<void> {
    try {
      commonModule.setLoading(true);
      const urlObject: URL = new URL(url);
      const response: AxiosResponse = await axios({
        method: "POST",
        url: "/shorten",
        data: {
          scheme: urlObject.protocol,
          domain: urlObject.host,
          path: urlObject.pathname,
        },
      });
      // TODO 設定結果
      console.log(response);
    } catch (apiError) {
      // TODO 錯誤處理
    } finally {
      commonModule.setLoading(false);
    }
  }

  @Action
  public validateUrl(url: string): void {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isUrlValid = urlRegex.test(url);
    this.SET_URL_VALID(isUrlValid);
  }

  @Action
  public setUrl(url: string): void {
    this.SET_URL(url);
  }
}

export default getModule(ReurlModule);
