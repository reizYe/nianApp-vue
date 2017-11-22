<template>
    <div>
        <header class="commonheader">
    <section>
        <span class="iconfont icon-account"></span>
        <div>
            <router-link to="/menu"><span>关注</span></router-link>
            <router-link to="/menu/menuactive"><span>动态</span></router-link>
        </div>
        <span class="iconfont icon-search"></span>
    </section>
</header>
<section class="commonbody">
    <article class="focus-article" v-for="item in menu" :key="item.id">
        <div>
            <img :src="item.img" class="focus-img" alt="">
            <div class="focus-userinfo clearfix">
                <p>{{item.name}}</p>
                <span class="timespan clearfix">{{item.time}}</span>
                <p>{{item.type}}</p>
            </div>
        </div>
        <div class="focus-content">{{item.content}}</div>
        <div class="focus-bottom">
           <span><b>回应</b></span>
           <span><b>赞&nbsp;{{item.good}}</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-remind"></i></button>
                <button><i class="iconfont icon-lights"></i></button>
                <button><i class="iconfont icon-electronics"></i></button>
            </div>

        </div>
    </article>
    <article class="focus-article">
        <div>
            <span class="focus-img"></span>
            <div class="focus-userinfo clearfix">
                <p>蹲墙角画圈圈</p>
                <p>打卡</p>
                <span class="timespan clearfix">08-03 09:32</span>
            </div>
        </div>
        <div class="focus-content">内容刚果共和国</div>
        <div class="focus-bottom">
            <span><b>回应</b></span>
            <span><b>赞&nbsp;2</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-remind"></i></button>
                <button><i class="iconfont icon-lights"></i></button>
                <button><i class="iconfont icon-electronics"></i></button>
            </div>

        </div>
    </article>
    <article class="focus-article">
        <div>
            <span class="focus-img"></span>
            <div class="focus-userinfo clearfix">
                <p>蹲墙角画圈圈</p>
                <p>打卡</p>
                <span class="timespan clearfix">08-03 09:32</span>
            </div>
        </div>
        <div class="focus-content">内容刚果共和国</div>
        <div class="focus-bottom">
            <span><b>回应</b></span>
            <span><b>赞&nbsp;2</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-remind"></i></button>
                <button><i class="iconfont icon-lights"></i></button>
                <button><i class="iconfont icon-electronics"></i></button>
            </div>

        </div>
    </article>
    <article class="focus-article">
        <div>
            <span class="focus-img"></span>
            <div class="focus-userinfo clearfix">
                <p>蹲墙角画圈圈</p>
                <span class="timespan clearfix">08-03 09:32</span>
                <p>打卡</p>
            </div>
        </div>
        <div class="focus-bottom">
        <div class="focus-content">内容刚果共和国</div>
            <span><b>回应</b></span>
            <span><b>赞&nbsp;2</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-remind"></i></button>
                <button><i class="iconfont icon-lights"></i></button>
                <button><i class="iconfont icon-electronics"></i></button>
            </div>

        </div>
    </article>
</section>
    </div>
</template>


<script>
export default {
    name:"commonbody",
    data(){
        return{
            menu:{}
        }
    },
    created(){
        this.$axios.get("api/menu").then(
            res=>{
                res = res.data;
                this.menu = res.data;
                // console.log(this.menu)
            },
            error=>{
                console.log(error)
            }
        )
    }
};
</script>

<style >
.focus-article {
  margin: 2rem 1rem;
  border-bottom: 1px solid #c2baba;
}
.focus-img {
  display: inline-block;
  background: url("../../assets/img/2.jpg");
  background-size: contain;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.focus-bottom {
  padding-bottom: 2rem;
}
.focus-userinfo {
  display: inline-block;
  width: 80%;
  padding-top: 0.1rem;
}
.focus-userinfo > p:first-child {
  display: inline-block;
  color: #00b3ee;
}
.focus-userinfo > span {
  float: right;
  margin-right: -2rem;
  color: #8c8c8c;
}
.focus-userinfo > p:last-child {
  color: #8c8c8c;
  margin-top: 0.3rem;
}
.focus-content {
  margin: 1rem 0;
  font-size: 1.1rem;
}
.focus-bottom > span {
  display: inline-block;
  text-align: center;
  background-color: #bcb7b7;
  opacity: 0.5;
  width: 2rem;
  height: 1rem;
  border-radius: 10%;
}
.focus-bottom > span > b {
  display: inline-block;
  vertical-align: top;
  color: #514f4f;
  font-size: 0.8rem;
  line-height: 1rem;
}
.focus-bottom-right {
  float: right;
}
.focus-bottom-right > button {
  border-radius: 50%;
  border: 0.1rem solid #bcb7b7;
  width: 1.8rem;
  height: 1.5rem;
}
</style>