<template>
  <div>
      <header class="commonheader">
    <section>
        <router-link to="/search"><span class="iconfont icon-back recommendtitle"></span></router-link>
        <div>
            <span class="addheader">推荐</span>
        </div>
        <!--<span class="iconfont icon-success"></span>-->
    </section>
</header>
<section class="commonbody">
    <article>
        <div class="recommendcontent">
            <!-- ng-repeat="item in findmorelist" -->
            <div>
                <!-- <img ng-src="{{item.img}}" alt=""> -->
                <!-- <p>{{item.title}}</p> -->
            </div>
            <!--<div>-->
                <!--<img src="img/animal.jpg" alt="">-->
                <!--<p>asdfjh</p>-->
            <!--</div>-->
            <!--<div>-->
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
        // name:'app', 
        // data(){
        //     return{
        //         title:'reiz'
        //     }
        // }
    }
</script>

<style scoped>
.recommendcontent{
    margin: 1rem;
    padding-left: 1rem;
    /*text-align: center;*/
}
.recommendcontent>div{
    width: 33%;
    /*margin: 1rem;*/
    /*padding-right: 1rem;*/
    display: inline-block;
    font-size: 1rem;
    margin-bottom: 1rem;
}
.recommendcontent img{
    width: 4.5rem;
    height: 4.5rem;
    display: block;
    padding-bottom: .5rem;
}
.recommendtitle{
    float: left;
    margin: 0;
}
.addheader{
    margin: 0
}
</style>
