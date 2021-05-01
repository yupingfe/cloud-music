import axios from 'axios'
const ajax = axios.create({baseURL:'https://netease-cloud-music-api-orpin-six.vercel.app/'})

ajax.interceptors.response.use(resp => {
  if (resp.status === 200) {
    return resp.data
  }
  else {
    return `错误！code：${resp.status} 状态声明：${resp.statusText}`
  }
})

// 获取轮播图
const getBanners = async () => {
  const resp = await ajax.get('/banner?type=2')
  if (resp.code === 200) {
    return resp.banners
  }
}

export default {
  getBanners
}