<template>
    <div>
       <header class="commonheader">
            <section>
                <!-- <span class="iconfont icon-back"></span> -->
                <div>
                    
                    <span class="addheader">热门</span>
                </div>
            </section>
        </header>
        <section class="commonbody">
            <article class="hotnews">
                <div class="hottitle">
                    <span>推荐</span>
                <router-link to="search/recommond"><span class="righttext">更多></span></router-link>
                </div>
                <div class="hotcontent">
                    <div>
                        <div></div>
                        <p>asdhfajaaaaa</p>
                    </div>
                    <div>
                        <div></div>
                        <p>30days</p>
                    </div>
                    <div>
                        <div></div>
                        <p>直到插画被我吃了</p>
                    </div>
                    <div>
                        <div></div>
                        <p>云何当此去</p>
                    </div>
                </div>
            </article>
            <article class="hotnews">
                <div class="hottitle">
                    <span>最新</span>
                    <router-link to="search/newlist"><span class="righttext">更多></span></router-link>
                </div>
                <div class="hotcontent">
                    <div>
                        <div></div>
                        <p>量变</p>
                    </div>
                    <div>
                        <div></div>
                        <p>清货机</p>
                    </div>
                    <div>
                        <div></div>
                        <p>我爱amy</p>
                    </div>
                    <div>
                        <div></div>
                        <p>《诡异》</p>
                    </div>
                </div>
            </article>
             <article class="hotnews" v-for="item in search" :key="item.id">
        <ul>
            <li class="clearfix">
                <span class="hotusernum">#{{item.id}}</span>
                <div class="userinfo">
                    <img :src="item.img" alt=""><br>
                    <b>{{item.title}}</b><br>
                    <span>{{item.content}}</span>
                </div>
                <div class="userstatus">
                    <div>
                        <span>按&nbsp;&nbsp;赞</span><br>
                        <b>{{item.saygood}}</b>
                    </div>
                    <div>
                        <span>进&nbsp;&nbsp;展</span><br>
                        <b>{{item.progress}}</b>
                    </div>
                </div>
            </li>

        </ul>
    </article>
            <div class="bottomcontent"></div>
        </section>
    </div>
</template>


<script>
export default {
  name: "hotnews",
  data() {
    return {
      search: {}
    };
  },
  created() {
    this.$axios.get("api/search").then(
      res => {
        res = res.data.data;
        this.search = res;
        console.log(this.search);
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style scoped>
.hotnews {
  margin: 1rem 0.8rem 0 0.8rem;
  border-bottom: solid 0.01rem #cccccc;
}
.hottitle > span:first-child {
  font-size: 1rem;
}
.hottitle > span:last-child {
  float: right;
  font-size: 0.8rem;
  color: #8c8c8c;
}
.hotnews > div:last-child {
  margin: 1rem 0;
  text-align: center;
}
.hotcontent > div {
  /*text-align: center;*/
  display: inline-block;
  width: 18%;
  margin-right: 0.8rem;
}
.hotcontent > div > div {
  background: url("../../assets/img/1.jpg");
  background-size: contain;
  display: inline-block;
  /*text-align: center;*/
  width: 3.5rem;
  height: 3.5rem;
}
.hotcontent > div > p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotnews > ul > li {
  text-align: center;
}
.hotusernum {
  display: inline-block;
  text-align: center;
  background-color: #bcb7b7;
  opacity: 0.5;
  width: 2rem;
  height: 1rem;
  margin-top: -1rem;
}
.righttext {
  float: right;
  font-size: 0.8rem;
}
</style>