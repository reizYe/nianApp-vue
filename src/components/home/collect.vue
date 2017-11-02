<template>
 <div>
<header class="commonheader">
    <section>
       <router-link to="/home"> <span class="iconfont icon-back"></span></router-link>
        <div>
            <span class="addheader">收藏</span>
            <!--<span ui-sref="focus/focusactive">动态</span>-->
        </div>
        <!--<span class="iconfont icon-search"></span>-->
    </section>
</header>
<section class="commonbody collectbody">
    <article class="collectmain">
        <div><em>我的... </em><b>> </b></div>
        <div class="collectgood">
            <span>赞过</span>
            <div>赞过的进展 <b>> </b></div>
            <div>赞过的记本 <b>> </b></div>
        </div>
        <div class="collectfocus">
           <span>关注</span>
            <div>关注的记本 <b>> </b></div>
        </div>
    </article>
</section>
 </div>
    

</template>


<script>
    export default {  
    }
</script>

<style scoped>
.collectbody{
    background-color: #e4e4e4;
    height: 40rem;
}
.collectmain{
    margin-top: 1rem;
}
.collectmain>div{
    width: 100%;
}
.collectmain b{
    float: right;
}
.collectmain em{
    padding-left: 1rem;
}
.collectmain>div:first-child{
    background-color: white;
    font-size: 1rem;
    padding:0.5rem 0rem;
    margin: 1.5rem 0;
}
.collectmain>div:first-child>b{
    padding-right: 1rem;
}
.collectgood>span{
    padding:0 0 .6rem 1rem;
    display: inline-block;
    color: #8b8b8b;
}
.collectgood>div{
    background-color: white;
    font-size: 1rem;
    padding:0.5rem 1rem;
}

.collectfocus{
    margin-top: 1rem;
}
.collectfocus>span{
    padding:0 1rem .6rem 1rem;
    display: block;
}
.collectfocus>div{
    padding: .5rem 1rem;
    background-color: white;
    font-size: 1rem;
    margin-bottom: 1rem;
}
</style>
