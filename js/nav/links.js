Vue.component('jcy-nav-links',{
    data(){
      return{
        navs:[]
      }

    },
    template:
    `
    <div class="nav-secondary">
    
        <div class="nav-items">
          <ul>
            <li v-for="nav in navs" ><a :href="nav.href" v-html ="nav.title"></a></li>
            
          </ul>
        </div>

        <a href="https://movie.douban.com/annual/2018?source=movie_navigation" class="movieannual2018"></a>
      </div>
    `,
    created () {
      axios('http://api.zhinengshe.com/10005-douban/navs',{  
        /*遇到了坎，因为链接最后面没有放"navs"也就是我创造的链接*/
        headers:{
          apikey:"307283a745af40a699b906e247273037"
        }
      }).then(res=>{
        let{err, data, msg} = res.data;


          if(err){
            alert(msg);
          }else{
            this.navs = data;
          }
        },err=>{
          alert("数据读取失败，请重新输入！")

        });
    }



});

























{/* <li><a href="https://movie.douban.com/cinema/nowplaying/">影讯&amp;购票</a></li>
            <li><a href="https://movie.douban.com/explore">选电影</a></li>
            <li><a href="https://movie.douban.com/tv/">电视剧</a></li>
            <li><a href="https://movie.douban.com/chart">排行榜</a></li>
            <li><a href="https://movie.douban.com/tag/">分类</a></li>
            <li><a href="https://movie.douban.com/review/best/">影评</a></li>
            <li><a href="https://movie.douban.com/annual/2018?source=navigation">2018年度榜单</a></li>
            <li><a href="https://www.douban.com/standbyme/2018?source=navigation">2018书影音报告</a></li> */}