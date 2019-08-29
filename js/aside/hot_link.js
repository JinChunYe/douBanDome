Vue.component('jsy-aside-hot_link',{
  data () {
    return {
      list:[],
    }
  },
    template:
    `
    <div class="hot_link">
    <h2>电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
    <ul>
      <li v-for = "itme in list">
        <a :href="itme.url" target="_blank">
          {{ itme.title }}
        </a>
      </li>
      
    </ul>
  </div>
    `,
    created () {
      axios('http://api.zhinengshe.com/10005-douban/hotlinks',{
        headers:{
          apikey:'307283a745af40a699b906e247273037'
        }
      }).then(res=>{
        let {err, data, msg} = res.data;
        if(err){
          alert(msg);
        }else{
          this.list = data;
        }
      },err=>{
        alert('输入不对，请刷新重试');
      });
    }



});

