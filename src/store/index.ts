import Vuex from "vuex";

import RootState from "@/interfaces/RootState";

/*
  Ideally if all your modules are dynamic
  then your store is registered initially
  as a completely empty object
 */
export default new Vuex.Store<RootState>({});
