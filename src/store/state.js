const state = {
    //轮播图模块
    slide: {
        time: 2000,
        pagation: true,
        data: []
    },
    //推荐模块
    recommend: {
        rec: [],//所有
        recNow: [],//当前
        nowLeft: '',
        nowRight: ''
    },
    //推广模块
    popularize: [],
    //当前在线
    online: [],
    //主要模块
    fjnowtab: 0,//更新时间轴
    gcnowtab: 0,//更新时间轴
    timelineCn:[]
}
export default state