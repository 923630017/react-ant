import axios from 'axios';

const newAxios = axios.create({
  baseURL: 'https://www.fastmock.site/mock/5c0e5b058d4e5cb3caf715d6e473d3bb/react_demo',
  withCredentials: true,
});
newAxios.interceptors.response.use(
    (res) => {
      // status为服务器连接状态，res.data.code为服务器返回的code，200为成功
      if (res.status === 200) {
        return Promise.resolve(res.data);
      }
    }
)
export default newAxios;
