Vue.component('jcy-wrapper',{
    template:
    `
    <div id="wrapper">
      <div id="content" class="row jusb">
        <!-- article -->
        <div class="article">
        
          <jcy-article-screening></jcy-article-screening>

          <jcy-article-gaia catalog="movie"></jcy-article-gaia>

          <jcy-article-gaia catalog="tv"></jcy-article-gaia>

          <jcy-article-reviews></jcy-article-reviews>

          </div>

         <!-- article  -->




        <!-- aside -->
        <div class="aside">
          <!-- rating_answer -->

         <jcy-aside-rating_answer></jcy-aside-rating_answer>
       


          <!-- rating_answer -->
          <!-- hot_link -->
         
          <jsy-aside-hot_link></jsy-aside-hot_link>

          <!-- hot_link -->
          <!-- billboard -->
          
         
           <jcy-aside-billboard></jcy-aside-billboard>


          <!-- billboard -->
          <!-- doulist -->
          
            <jcy-aside-doulist></jcy-aside-doulist>

          <!-- doulist -->
        </div>
        <!-- aside -->
      </div>
    </div>
    `





});