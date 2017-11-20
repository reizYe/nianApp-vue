<template>
    <div>
        <header class="home-header">
            <nav>
                <router-link to="/home/setting"><span class="iconfont icon-set"></span></router-link>
                <router-link to='/home/collect'>
                    <span class="iconfont icon-service"></span>
                </router-link>
            </nav>
            <section class="home-userinfo">
                <div class="home-image"></div>
                <p>{{name}}</p>
                <p>倒计时{{time}}</p>
                <article>
                    <router-link to='/home/money'>
                        <div>
                        <a>念币&nbsp;
                            <span>{{money}}</span>
                        </a>
                    </div>
                    </router-link>
                    
                    <div>
                        <a href="">宠物&nbsp;
                            <span>yes</span>
                        </a>
                    </div>
                </article>
            </section>
        </header>
        <section>

            <div class="home-container">

                <div class="ctnhead">
                    <span>记本</span>
                    <span>添加记本</span>
                </div>
               
                <article class="ctnbody">
                  
                    <div v-for="item in home" :key="item.id">
                      <router-link to="">
                        <div>
                            <a>
                              <img v-bind:src="item.img"  class="ctnbody-img">
                            </a>
                        </div>
                        <p>{{item.description}}</p>
                  </router-link>
                    </div>
                </article>
               <!-- <img src="../../assets/img/1.jpg" alt=""> -->
            </div>
        </section>
    </div>
</template>


<script>
const err_ok = 0;
export default {
  name: "App",
  data() {
    return {
      name: "蹲墙角画圈圈",
      time: "12:25",
      money: 15,
      home: {}
    };
  },
  created() {
    this.$axios.get("/api/home").then(
      response => {
        // console.log(response);
        response = response.data;
        if (response.errno === err_ok) {
          this.home = response.data;
          console.log(this.home);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style scoped>
.home-header {
  background: url("../../assets/img/course_banner.jpg") no-repeat;
  background-size: cover;
  padding: 2rem 1rem 1rem;
}

.icon-service {
  float: right;
}

.home-userinfo {
  text-align: center;
}

.home-image {
  display: inline-block;
  background: url("../../assets/img/1.jpg") center;
  background-size: 5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 3rem;
  margin-top: 3rem;
}

.home-userinfo > p:nth-child(2) {
  font-size: 1.2rem;
  color: white;
  margin: 0.5rem 0;
}

.home-userinfo:last-child {
  color: white;
}

.home-userinfo > article {
  margin-top: 2rem;
  padding-bottom: 2rem;
}

.home-userinfo > article div {
  display: inline-block;
  background-color: #0c0c0c;
  opacity: 0.7;
  width: 5rem;
  height: 1.8rem;
}

.home-userinfo a {
  display: inline-block;
  color: white;
  text-decoration: underline;
  margin: 0.3rem 0;
}

.home-container {
  margin: 2rem 10%;
}

.home-header a {
  color: #fff;
}
/*.containerhead{*/

/*margin: 0 10%;*/

/*}*/

.ctnhead > span:first-child {
  font-weight: 500;
  display: inline-block;
}

.ctnhead > span:last-child {
  color: #8c8c8c;
  /* display: inline-block; */
  float: right;
}

.ctnbody {
  /*margin-top: 1rem;*/
  /*margin: 1rem 10%;*/
  margin: 1rem -1.5rem 0 -1rem;
}

.ctnbody > div {
  display: inline-block;
  text-align: center;
  width: 32%;
  margin-top: 1rem;
}

.ctnbody-img {
  /* background: url("../../assets/img/p1.png"); */
  background-size: contain;
  display: inline-block;
  text-align: center;
  width: 5rem;
  height: 5rem;
}

.ctnbody p {
  text-align: center;
  margin: 0.5rem 0;
}
</style>