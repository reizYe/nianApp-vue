<template>
    <div class="header">
    <header class="commonheader">
    <section>
        <router-link to="/home"><span class="iconfont icon-back"></span></router-link>
        <div>
            <span class="addheader">设置</span>
        </div>
        <!--<span class="iconfont icon-success"></span>-->
    </section>
</header>
<section class="commonbody">
    <article class="settingheader">
        <img src="../../assets/img/1.jpg" alt="">
        <div>
            <button>设置封面</button>
            <button>设置头像</button>
        </div>
    </article>
    <article class="settingbody">
        <div><span>编辑个人资料</span> <span> ></span></div>
        <div><span>账号和绑定设置</span><span> ></span></div>
    </article>
    <article class="settingbody">
        <div>
            <span>日更模式</span>
            <input type="checkbox" class="al-toggle-button">
            <!--<div name="" class="open1" ng-click="open()">-->
                <!--<div id="daily2" class="open2"></div>-->
            <!--</div>-->
        </div>
    </article>
    <article class="settingbody">
        <div><span>移动网络不下载...</span>
            <input type="checkbox" class="al-toggle-button">
        </div>
        <div><span>保存进展卡片</span>
            <input type="checkbox" class="al-toggle-button">
        </div>
        <div><span>每日更新提醒</span>
            <input type="checkbox" class="al-toggle-button">
        </div>
        <div><span>只能通过昵称找到我</span>
            <input type="checkbox" class="al-toggle-button">
        </div>
        <div><span>应用密码</span>
            <input type="checkbox" class="al-toggle-button">
        </div>
        <div><span>清除缓存</span> <span> ></span></div>
    </article>
    <article class="settingbody">
        <div><span>念是什么</span> <span> ></span></div>
        <div><span>我想给五星</span> <span> ></span></div>
    </article>
    <article class="settingbody">
        <div>
            <b><span>再见</span></b>
        </div>
    </article>
    <article class="settingfooter">
        <div>念</div>
        <br>
        <div>5.0.3</div>
    </article>
</section>
    </div>
    

</template>


<script>
export default {};
</script>

<style scoped>
.settingheader{
    margin: 1rem;
    background-image: url("../../assets/img/course_banner.jpg");
    height: 15rem;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    z-index: -1;
}
.icon-back{
    float: left;
    margin: 0;
}
.commonheader  .addheader{
    margin: 0;
}
.settingheader>img{
    display: inline-block;
    padding-top: 8rem;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
}
.settingheader>div{
    width: 100%;
    position: absolute;
    bottom: 0rem;
    height: 3rem;
    /*display: inline-block;*/
    border-radius:0 0 1rem 1rem;
    background-color: black;
}
.settingheader>div>button{
    /*width: 30%;*/
    background-color: black;
    border: none;
    padding: 0.7rem 2rem;
    color: white;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
}
.settingbody{
    background-color: white;
    font-size: .8rem;
    margin: 1.5rem 0;

}
.settingbody>div{
    padding: .6rem 1rem;
    /*border-top: .1px solid #d1d1d1;*/
    border-bottom: .1px solid #d1d1d1;
}
.settingbody>div>span:last-child{
    float: right;
    color: #cccccc;
}
.settingfooter{
   margin:1rem 0 6rem 0;
    text-align: center;
}
.settingfooter>div:first-child{
    display: inline-block;
    font-size: 1rem;
    padding-bottom: 1rem;
}
.settingfooter>div:last-child{
    display: inline-block;
    color: #8b8b8b;
}
.al-toggle-button{
    -webkit-appearance: none;
    position: relative;
    top: -0.4rem;
    width: 2.5rem;
    height:1.5rem;
    background: #dfdfdf;
    border-radius: 1rem;
    border: 1px solid #dfdfdf;
    outline: 0;
    box-sizing: border-box;
    float: right;
}
.al-toggle-button:checked{
    border-color: #04be02;
    background-color: #04be02;
}
.al-toggle-button:before, .al-toggle-button:after{
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 1.4rem;
    border-radius: 1rem;
    transition: transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    -webkit-transition: -webkit-transform 0.3s;
}
.al-toggle-button:before{
    width: 0rem;
    background-color: #fdfdfd;
}
.al-toggle-button:after{
    width: 1.4rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.al-toggle-button:checked:before{
    transform: scale(0);
    -webkit-transform: scale(0);
}
.al-toggle-button:checked:after{
    transform: translateX(1.2rem);
    -webkit-transform: translateX(1.2rem);
}
/*记本详情样式*/
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
