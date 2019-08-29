Vue.component('jcy-nav-search',{
    template:
    `
    <div class="nav-wrap">
        <div class="nav-primary">
          <div class="nav-logo"></div>
          <div class="nav-search">
            <form action="https://movie.douban.com/subject_search" method="get">
              <div class="inp">
                <input
                  id="inp-query"
                  name="search_text"
                  size="22"
                  maxlength="60"
                  placeholder="搜索电影、电视剧、综艺、影人"
                  value=""
                  autocomplete="off"
                />
              </div>
              <div class="inp-btn"><input type="submit" value="搜索" /></div>
            </form>
          </div>
        </div>
      </div>
    `






});