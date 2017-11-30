<template>
    <div>
       <!-- <header class="commonheader">
    <section>
        <span class="iconfont icon-account"></span>
        <div>
            <router-link to="/menu"><span>关注</span></router-link>
            <router-link to="/menu/menuactive"><span>动态</span></router-link>
        </div>
        <span class="iconfont icon-search"></span>
    </section>
</header> -->
<vheader :parmas='parmas'></vheader>
<section class="commonbody commentbody">
    <article class="focus-article" v-for="items in menuactive" :key="items.id">
        <div>
            <img :src="items.img" class="focus-img" alt="">
            <div class="focus-userinfo clearfix">
                <p>{{items.name}}</p>
                <span class="timespan clearfix">{{items.time}}</span>
                <p>赞了：{{items.type}}</p>
            </div>
        </div>
        <div class="focus-content">{{items.content}}</div>
        <div class="focus-bottom">
            <span><b>回应</b></span>
            <span><b>赞&nbsp;{{items.good}}</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-viewgallery"></i></button>
                <button><i class="iconfont icon-gifts"></i></button>
                <button><i class="iconfont icon-jewelry"></i></button>
            </div>
        </div>
    </article>
</section>
    </div>
</template>


<script>
export default {
  name: "commentbody",
  data() {
    return {
      menuactive: {},
      params: [
        "icon-account",
        "",
        "关注",
        "/menu",
        "动态",
        "/menu/menuactive",
        "icon-search"
      ]
    };
  },
  created() {
    this.$axios.get("api/menuactive").then(
      res => {
        res = res.data;
        this.menuactive = res.data;
        console.log(this.menuactive);
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>

<style scoped>

</style>