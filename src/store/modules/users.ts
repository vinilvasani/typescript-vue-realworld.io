import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import { User, Profile, UserSubmit } from "@/store/models.d.ts";
import { loginUser } from "../api";

@Module({
  namespaced: true,
  name: "user",
  store,
  dynamic: true,
})
class UserModule extends VuexModule {
  public user: User | null = null;
  public profile: Profile | null = null;

  @Mutation
  public setUser(user: User) {
    this.user = user;
  }

  @Action({ commit: "setUser" })
  public async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    // console.log(user);
    return user;
  }
}
export default getModule(UserModule);
