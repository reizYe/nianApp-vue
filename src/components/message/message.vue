<template>
    <div>
        <!-- <header class="commonheader">
            <section>
                <div>
                    <span class="addheader">消息</span>
                </div>
            </section>
        </header> -->
        <vheader :param="param" ></vheader>
    <section class="commonbody">
        <article class="messagearticle">
            <div>
                <div><span>回&nbsp;&nbsp;应</span> <br><b>0</b></div>
                <div><span>按&nbsp;&nbsp;赞</span> <br><b>0</b></div>
                <div><span>通&nbsp;&nbsp;知</span> <br><b>0</b></div>
            </div>
        </article>
        <article class="messagecontent">
            <div>这里是空的 <br>要去给好友写信吗？</div>
            <router-link to="/messagefocus">
                <button><a>嗯！</a></button>
            </router-link>
        </article>
    </section>
    </div>
</template>


<script>
// import vheader from "../header/header.vue";
export default {
//    components:{
//        vheader
//    },
data(){
    return{
        param:"1111"
    }
}
}
</script>

<style scoped>
.messagearticle{
    text-align: center;
    padding-top:1rem ;
    background-color: #e9e3e3;
}
.messagearticle>div>div{
    display: inline-block;
    margin-bottom: 1rem;
    text-align: center;
}
.messagearticle>div>div:first-child,.messagearticle>div>div:nth-child(2){
    border-right: solid .01rem #cccccc;
}
.messagearticle>div>div>span{
    color: #8c8c8c;
    margin: 0 1rem;
    /*letter-spacing: 0.5rem;*/
}
.messagearticle>div>div>b{
    display: inline-block;
    text-align: center;
}
.messagecontent{
    margin-top: 12rem;
    text-align: center;
}
.messagecontent>div{
    color: #8c8c8c;
}
.messagecontent>button{
    margin-top: 1rem;
    width: 5rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: #00a0df;
    border: none;
}
.messagecontent>button a{
    text-decoration: underline;
    color: white;
}
</style>