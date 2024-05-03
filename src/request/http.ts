import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3001', // 使用环境变量获取API的基础URL
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // 在这里添加任何需要修改的请求配置或者处理逻辑
    // const token = localStorage.getItem('file-upload-token')
    // const urlArr = ['/login']

    // if (token && !urlArr.includes(config.url ?? '')) {
    //   config.headers.Authorization = `${token}`;
    // }
    return config;
  },
  (error) => {
    console.error('Error in request interceptor:', error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 在这里添加任何需要修改的响应数据或者处理逻辑
    // const { code } = response.data
    // if(code === 401) {
    //   localStorage.removeItem('file-upload-token')
    // }

    return response;
  },
  (error) => {
    console.error('Error in response interceptor:', error);
    return Promise.reject(error);
  }
);

export default instance;
