import axios from 'axios'
const ajax = axios.create({baseURL:'https://cloud-music-api-eight.vercel.app/'})

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
// 获取推荐歌单
const getRecMusicList = async () => {
  const resp = await ajax.get('/personalized?limit=6')
  return resp.result
}

// 获取最新歌曲名单
const getLatstMusicList = async () => {
  const resp = await ajax.get('/personalized/newsong')
  return resp.result
}

export default {
  getBanners,
  getRecMusicList,
  getLatstMusicList
}