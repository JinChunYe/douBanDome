Vue.component('jcy-article-reviews',{
  data () {
    return {
      list:[],
      imgroot:'http://api.zhinengshe.com/10005-douban/',
      apikey:'307283a745af40a699b906e247273037',
      
    }
  },
    template:
    `
    <section class="reviews">
            <!-- section-hd -->
            <div class="section-hd row">
              <h2 class="flex-1">
                最受欢迎的影评 <span> <a href="https://movie.douban.com/review/best/">更多热门影评»</a> </span>
                <span> <a href="https://movie.douban.com/review/latest/">新片影评»</a> </span>
              </h2>
            </div>
            <!-- section-hd -->
            <!-- reviews-bd -->
            <div class="reviews-bd">
              <!-- review -->
              <div class="review" v-for = "itme in list">
                <div class="review-hd">
                  <a :href="itme.movieUrl">
                    <img
                      class="lazy"
                      :src=" imgroot + itme.img + '?apikey='+ apikey "
                      alt="金刚"
                    />
                  </a>
                </div>
                <!-- review-bd  -->
                <div class="review-bd">
                  <h3><a :href="itme.movieUrl" class="">{{ itme.movieTitle }}</a></h3>

                  <div class="review-meta">
                    <a :href="itme.authorUrl">{{itme.author}}</a> 评论
                    <a :href="itme.subjectUrl">{{itme.title}}</a>

                    <span :class="'allstar' + itme.rate * 10 "></span>
                  </div>
                  <div class="review-content">
                    {{itme.content}}... <a :href="itme.subjectUrl">(全文)</a>
                  </div>
                </div>
              </div>
              <!-- review -->
              
            </div>
          </section>
        

        
    `,
    created () {
      axios('http://api.zhinengshe.com/10005-douban/reviews',{
        headers:{
          apikey:'307283a745af40a699b906e247273037'
        },
      }).then(res=>{
        let {err, data, msg} = res.data;
        if(err){
          alert(msg);
        }else{
          this.list = data;
        }
      },ree=>{
        alert("请重新输入，刷新一下");
      });
    }



});