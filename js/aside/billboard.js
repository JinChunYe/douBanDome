Vue.component('jcy-aside-billboard',{
  data () {
    return {
      list:[]
    }
  },
  methds () {
    
  },
    template:
    `
    <div id="billboard">
            <div class="billboard-hd">
              <h2>
                一周口碑榜<span><a href="https://movie.douban.com/chart">更多榜单»</a></span>
              </h2>
            </div>
            <div class="billboard-bd">
              <ul>
                <li class="row" v-for = "item,index in list">
                  <span class="order">{{ index+1 }}</span>
                  <p class="title"><a :href="item.url">{{ item.title }}</a></p>
                </li>
               
              </ul>
            </div>
          </div>
    `,
    created () {
      axios("http://api.zhinengshe.com/10005-douban/billboard",{
            headers:{
              apikey:"307283a745af40a699b906e247273037"
            }
      
      }).then(res=>{
        let {err, data, msg} = res.data;
        if(err){
          alert(msg);
        }else{
          this.list = data;

        }


      },err=>{
        alert("读取数据失败，请刷新重试！");

      });
    }
  

});