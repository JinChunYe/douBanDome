Vue.component('jcy-article-gaia',{
  props:['catalog'],
    template:
    `
    <section class="gaia">
            <!-- head -->
            <div class="fliter-wp row">
              <h2><div class="activate">最近热门电影</div></h2>
              <div class="filter flex-1">
                <div class="tags">
                  <ul class="tag-list row">
                    <li class="activate">热门</li>
                    <li>最新</li>
                    <li>豆瓣高分</li>
                    <li>冷门佳片</li>
                    <li>华语</li>
                    <li>欧美</li>
                    <li>韩国</li>
                    <li>日本</li>
                  </ul>
                </div>
              </div>
              <a href="/explore#!type=movie&amp;tag=%E7%83%AD%E9%97%A8" class="more-link">更多»</a>
            </div>
            <!-- head -->
            <!-- list -->
            <div class="list-wp">
              <div class="slider">
                <div class="slide-container">
                  <div class="slide-wrapper" style="width: 1400px;left: -700px;">
                    <!-- page -->
                    <div class="slide-page">
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>地久天长 <strong>7.9</strong></p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                    </div>
                    <!-- page -->
                    <!-- page -->
                    <div class="slide-page">
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>地久天长 <strong>7.9</strong></p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                      <!-- item -->
                      <a class="item" target="_blank">
                        <div class="cover-wp">
                          <img
                            src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550208359.jpg"
                            alt="地久天长"
                          />
                        </div>
                        <p>
                          <span class="green">
                            <img
                              src="https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"
                              width="16"
                              class="new"
                            />
                          </span>
                          地久天长 <strong>7.9</strong>
                        </p>
                      </a>
                      <!-- item -->
                    </div>
                    <!-- page -->
                  </div>
                </div>

                <div class="slide-ctrl ui-slide-control">
                  <a class="btn-prev" href="javascript:void(0)"></a> <i class="dot activate"></i> <i class="dot"></i>
                  <i class="dot"></i> <i class="dot"></i> <i class="dot"></i> <a class="btn-next" href="javascript:void(0)"></a>
                </div>
              </div>
            </div>
            <!-- list -->
          </section>
    `


});