// export const apiUrl = 'http://localhost/screen/';
// export const fileUrl = 'http://localhost/screenFiles/';
// export const apiUrl = 'http://192.168.1.125';
// export const apiUrl = 'http://localhost/screen/';
// export const fileUrl = 'http://localhost/screenFiles/';
export const apiUrl = 'https://wx.chinalx.com/screen/';
export const fileUrl = 'https://wx.chinalx.com/screenFiles/';
// export const apiUrl = 'http://10.168.5.101/screen/';
// export const fileUrl = 'http://10.168.5.101/screenFiles/';

/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
  const { response } = error;
  // console.log(response);

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log(`请求错误 ${status}`, errorText);
  }

  return response;
};
const request = extend({
  errorHandler,
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return {
    url: `${apiUrl}${url}`,
    options: { ...options },
  };
});

export default request;
