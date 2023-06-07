import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import CommonState from "@/interfaces/CommonState";
import store from "@/store";

@Module({ dynamic: true, store: store, name: "commonModule" })
class CommonModule extends VuexModule implements CommonState {
  public isLoading = false;

  @Mutation
  private SET_LOADING(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @Action
  public setLoading(isLoading: boolean) {
    this.SET_LOADING(isLoading);
  }
}

export default getModule(CommonModule);
