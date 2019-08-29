Vue.component('jcy-article-screening',{
  data () {
    return {
      cur : 0,
      pages:[],
      imgroot:"http://api.zhinengshe.com/10005-douban/",
      apikey:"307283a745af40a699b906e247273037",
      //ticket:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1218727%3F_v_%3Dyes%26merCode%3D1000011",
    };
  },
    template:
    `
    <section id="screening">
            <!-- section-hd -->
            <div class="section-hd row">
              <h2 class="flex-1">
                正在热映 <span> <a href="https://movie.douban.com/cinema/nowplaying/changchun/">全部正在热映»</a> </span>
                <span> <a href="https://movie.douban.com/cinema/later/changchun/">即将上映»</a> </span>
              </h2>


              <div class="slide-tip"><span class="ui-slide-index">{{ cur + 1 }}</span> / <span class="ui-slide-max">{{ pages.length }}</span></div>
              
              
              <div class="ui-slide-control">
                <span class="prev-btn" @click = prev()><a class="btn-prev" href="javascript:void(0)"></a></span>
                <span class="next-btn" @click = next()><a class="btn-next" href="javascript:void(0)"></a></span>
              </div>
            </div>
            <!-- section-hd -->
            <!-- screening-bd -->
            <div class="screening-bd">
              <!-- ul left -700 -->
              <div class="list-wp">
                <div class="slider">
                  <div class="slide-container">


                    <div class="slide-wrapper" :style="{width:pages.length * 700 + 'px', left: -700 * cur + 'px'}">
                      
                    
                    <!-- page -->
                      


                      <div class="slide-page" v-for="page in pages">
                      
                        <!-- item -->
                        <div class="ui-slide-item" v-for= "mover in page" >
                          <ul>
                            <li class="poster">



                              <a :href = mover.url>
                                <img
                                  :src="imgroot + mover.img + '?apikey=' + apikey"
                                  alt="千与千寻"
                                />
                              </a>






                            </li>


                            <li class="title"><a class="">{{ mover.title }}}</a></li>


                            <li class="rating">
                              <!-- ✨星星评分 allstar(00~50)+5 -->

                              <span :class="'rating-star allstar' +  mover.star"></span> <span class="subject-rate">{{ mover. rate }}</span>

                            </li>


                            <li class="ticket_btn">
                              <span> <a   :href = 'mover.ticket' target="_blank" >选座购票</a> </span>
                            </li>
                          </ul>
                        </div>
                        <!-- item -->
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- screening-bd -->
          </section>
    `,
    created () {
      axios('http://api.zhinengshe.com/10005-douban/screening',{
        headers:{
          apikey:'307283a745af40a699b906e247273037'
        }

      }).then(res=>{
        let {err, data, msg} = res.data;
          if(err){
            alert(msg);

          }else{
            //data=>[x,x,x,x,....]

            let result=[];

            while (data.length>0) {
              result.push(
                data.splice(0,5)
              );
            }
              this.pages = result;
          }

      },err=>{

        alert('数据请求失败，请刷新重试');
      });
    },
    methods: {
      prev(){
        if(this.cur>0){
          this.cur--;
        }
      },
      next(){
        if(this.cur < this.pages.length-1){
          this.cur++;
        }
        
      }
    }





});