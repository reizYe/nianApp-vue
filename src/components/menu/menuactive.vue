<template>
    <div>
       <header class="commonheader">
    <section>
        <span class="iconfont icon-account"></span>
        <div>
            <router-link to="/menu"><span>关注</span></router-link>
            <router-link to="/menuactive"><span>动态</span></router-link>
        </div>
        <span class="iconfont icon-search"></span>
    </section>
</header>
<section class="commonbody">
    <!-- <article class="focus-article" ng-repeat="item in focusactivelist">
        <div>
            <img ng-src="{{item.img}}" class="focus-img" alt="">
            <div class="focus-userinfo clearfix">
                <p>{{item.name}}</p>
                <span class="timespan clearfix">{{item.time}}</span>
                <p>赞了：{{item.type}}</p>
            </div>
        </div>
        <div class="focus-content">{{item.content}}</div>
        <div class="focus-bottom">
            <span><b>回应</b></span>
            <span><b>赞&nbsp;{{item.good}}</b></span>
            <div class="focus-bottom-right">
                <button><i class="iconfont icon-viewgallery"></i></button>
                <button><i class="iconfont icon-gifts"></i></button>
                <button><i class="iconfont icon-jewelry"></i></button>
            </div>
        </div>
    </article> -->
</section>
    </div>
</template>


<script>
export default {
}
</script>

<style scoped>

</style>