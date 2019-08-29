Vue.component('jcy-aside-doulist',{
  data () {
    return {
      list:[],
    }
  },
    template:
    `
    <div id="doulist">
            <h2>热门豆列</h2>
            <ul>
              <li v-for = "item in list">
                <span>{{ item.recommend+'推荐' }}</span>
                <div class="title"><a target="_blank" :href="item.url">{{ item.title }}</a></div>
              </li>
              
            </ul>
          </div>
    `,
    created () {
      axios('http://api.zhinengshe.com/10005-douban/doulist',{
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
        alert("请刷新重试，谢谢");
      });
    }


});