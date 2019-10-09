import request from '@/utils/request';

export interface IFuserinfo {
  userId: string;
  userNickname: string;
  userHead: any;
  serMotto: string;
}

export function getUserInfo() {
  return request.get<IFuserinfo>('/rest/finance/auth/userinfo');
}
