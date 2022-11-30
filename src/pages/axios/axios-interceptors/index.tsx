import axios from 'axios';
export default function Axios() {
  // axios 请求拦截器和响应拦截器
  //  多个请求拦截器，后执行的，先输出
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (err) {
      return Promise.reject(err);
    },
  );
  // 多个响应拦截器，先执行的，先输出
  axios.interceptors.response.use(
    function (res) {
      return res;
    },
    function (err) {
      return Promise.reject(err);
    },
  );
  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
}
