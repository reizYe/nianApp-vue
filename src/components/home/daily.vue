<template>
 <div>
     <header class="commonheader">
    <section class="basicdailyheader">
       <router-link to="/home"> <span class="iconfont icon-back"></span></router-link>
        <div>
            <!--<span class="addheader">新进展！</span>-->
        </div>
        <span class="iconfont icon-more"></span>
    </section>
</header>
<section class="commonbody">
    <article class="basicdailybody">
        <div class="basicdailyfirst">
            <!-- ng-src="{{daily.img}}" -->
            <img  alt="">
            <button>更新</button>
        </div>
        <div class="basicdailysecond">
            <span>{{daily.description}}</span><br>
            <div>
                <span>进展</span><span>0</span>
                <span>赞</span><span>0</span>
                <span>关注</span><span>0</span>
            </div>
        </div>
        <div class="basicdailythird">
            <button>添加标签</button>
        </div>
        <div class="basicdailyfourth">
            <img src="img/2.jpg" alt="">
            <button>+</button>
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
.commonheader>section.basicdailyheader{
    margin-bottom: 2rem;
}
.basicdailybody{
    margin: 3rem 1rem;
}
.basicdailyfirst>img{
    width: 3rem;
    height: 3rem;
    margin-top: -2rem;
    position: relative;
    border: 3px solid white;
    border-radius: .3rem;
}
.basicdailyfirst>button{
    text-decoration: underline;
    background-color: #00a0df;
    color: white;
    width: 4rem;
    height: 1.5rem;
    float: right;
    border-radius: 1.5rem;
    border: none;
}
.basicdailysecond{
    margin: 1rem 0;
}
.basicdailysecond>span:first-child{
    font-size: 1rem;
    padding: .5rem 0;
    font-weight: 700;
    display: inline-block;
}
.basicdailysecond>div>span{
    margin: 0 .1rem;
    color: #8c8c8c;
}
.basicdailythird{
    border-bottom: 1px solid #cccccc;
    width: 100%;
    margin-top: 1rem;
}
.basicdailythird>button{
    background-color: #d4d4d4;
    font-size: 0.6rem;
    width: 3rem;
    height: 1.5rem;
    color: #8c8c8c;
    border:none ;
    border-radius: .3rem;
    margin-bottom: 1rem;
}
.basicdailyfourth{
    border-bottom: 1px solid #cccccc;
    width: 100%;
    height: 3rem;
    /*text-align: center;*/
}
.basicdailyfourth>img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    display: inline-block;
    vertical-align: middle;
}
.basicdailyfourth>button{
    width: 1.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
    display: inline-block;
    height: 1.5rem;
    border: none;
    border-radius: 1.5rem;
}


</style>
