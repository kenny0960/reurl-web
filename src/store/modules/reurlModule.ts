import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import ReurlState from "@/interfaces/ReurlState";
import store from "@/store";

@Module({ dynamic: true, store: store, name: "reurlModule" })
class ReurlModule extends VuexModule implements ReurlState {
  public url = "";

  @Mutation
  private SET_URL(url: string): void {
    this.url = url;
  }

  @Action
  public async postUrl(url: string): Promise<void> {
    try {
      // TODO 載入中
      console.log(url);
    } catch (apiError) {
      // TODO 錯誤處理
    } finally {
      // TODO 移除載入中
    }
  }

  @Action
  public setUrl(url: string): void {
    this.SET_URL(url);
  }
}

export default getModule(ReurlModule);
