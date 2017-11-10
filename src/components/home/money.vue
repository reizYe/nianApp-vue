<template>
  <div>
      <header class="commonheader">
    <section>
       <router-link to="/home"> <span class="iconfont icon-back"></span></router-link>
        <div class="moneyhead">
            <span class="addheader">念币</span>
        </div>
        <!--<span class="iconfont icon-success"></span>-->
        <span class="">奖励提现</span>
    </section>
</header>
<section class="commonbody">
    <article class="moneyheader">
        <img src="../../assets/img/money.jpg" alt="">
        <p>剩余念币</p>
        <p>{{allofmoney}}</p>
        <!--<p>{{firstmoney}}</p>-->
        <button>充值</button>
    </article>
    <article>
        <div class="moneycontent">
            <span class="iconfont icon-information"></span>
            <div class="moneyfunc">
                <span>会员</span>
                <span> ></span><br>
                <span>骄傲的成为念的会员</span>
            </div>
        </div>
        <div class="moneycontent">
            <span class="iconfont icon-information"></span>
            <div class="moneyfunc">
                <span>会员</span>
                <span> ></span><br>
                <span>骄傲的成为念的会员</span>
            </div>
        </div>
        <div class="moneycontent">
            <span class="iconfont icon-information"></span>
            <div class="moneyfunc">
                <span>会员</span>
                <span> ></span><br>
                <span>骄傲的成为念的会员</span>
            </div>
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
.commonheader>section>div.moneyhead{
    width: 55%;
}
.moneyheader{
    text-align: center;
    background-color: white;
}
.moneyheader>img{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin-top: 2rem;
}
.moneyheader>p:nth-child(2){
    margin: .5rem 0;
}
.moneyheader>p:nth-child(3){
    font-size: 1rem;
}
.moneyheader>button{
    margin: 1rem 0;
    width: 5rem;
    height: 2rem;
    background-color: #00b3ee;
    border-radius: 1.5rem;
    text-align: center;
    text-decoration: underline;
    color: white;
    border: none;
}
.moneycontent{
    margin-top: 1rem;
    padding: 0 1rem;
    background-color: white;
}
.moneycontent>span{
    vertical-align: middle;
    line-height: 3rem;
    display: inline-block;
}
.moneyfunc{
    display: inline-block;
    vertical-align: middle;
    width: 90%;
}
.moneyfunc>span:first-child{
    font-size: 1rem;
}
.moneyfunc>span:nth-child(2){
    /* display: inline-block; */
    float: right;
}
.moneyfunc>span:last-child{
    color: #8b8b8b;
    font-size: 12px;
}
</style>
