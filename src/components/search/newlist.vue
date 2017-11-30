<template>
   <div>
       <!-- <header class="commonheader">
    <section>
        <router-link to='/search'><span class="iconfont icon-back recommendtitle"></span></router-link>
        <div>
            <span class="addheader">最新</span>
        </div>
    </section>
</header> -->
<vheader :params='params'></vheader>
<section class="commonbody">
    <article>
        <div class="recommendcontent">
             <!-- ng-repeat="item in findnewlist" -->
            <div v-for="item in searchmore" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
            </div>
            <!--<div>-->
            <!--<img src="img/animal.jpg" alt="">-->
            <!--<p>asdfjh</p>-->
            <!--</div>-->
            <!--<div> searchmore--> 
            <!--<img src="img/animal.jpg" alt="">-->
            <!--<p>asdfjh</p>-->
            <!--</div>-->
        </div>
    </article>
</section>
   </div>

</template>


<script>
export default {
  name: "recommendcontent",
  data() {
    return {
      searchmore: {},
      params:['icon-back','/search','最新','','','','']
    };
  },
  created() {
    this.$axios
      .get("api/searchmore")
      .then(response => {
        this.searchmore = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.recommendcontent {
  margin: 1rem;
  padding-left: 1rem;
  /*text-align: center;*/
}
.recommendcontent > div {
  width: 33%;
  /*margin: 1rem;*/
  /*padding-right: 1rem;*/
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.recommendcontent img {
  width: 4.5rem;
  height: 4.5rem;
  display: block;
  padding-bottom: 0.5rem;
}
.recommendtitle {
  float: left;
  margin: 0;
}
.addheader {
  margin: 0;
}
</style>
