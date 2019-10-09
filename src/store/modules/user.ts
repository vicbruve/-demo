import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators';
import store from '@/store';
import { __assign } from 'tslib';
import { IFuserinfo, getUserInfo } from '@/api/user';

@Module({ dynamic: true, store, name: 'userdata' })
class userdata extends VuexModule {
  public userId: string = '';
  public userNickname: string = '';
  public userHead: any;
  public userMotto: string = '';

  @Mutation
  private SET_USER_INFO(userinfo: IFuserinfo) {
    __assign(this, userinfo);
  }

  @Action
  public async GetUserInfo() {
    const { data } = await getUserInfo();
    if (!data) {
      throw Error('获取用户信息失败');
    }
    this.SET_USER_INFO(data);
  }
}

export const UserModules = getModule(userdata);
