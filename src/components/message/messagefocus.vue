<template>
  <div>
<header class="commonheader">
    <section>
        <router-link to="/message">
            <span class="iconfont icon-back"></span>
        </router-link>
        <div>
            <span class="addheader">关注</span>
        </div>
        <!--<span class="iconfont icon-success"></span>-->
    </section>
</header>
<section class="commonbody">
    <article class="messagebody">
        <div v-for="message in messagefocus" :key="message.id">
            <img :src="message.img" alt="">
            <div>
                <span>{{message.name}}</span>
                <button>写信</button>
            </div>
        </div>
    </article>
</section>
  </div>
</template>
<script>
export default {
    name:"messagebody",
    daata(){
        return{
            messagefocus:{

            }
        }
    },
    created(){
        this.$axios.get("api/messagefocus").then(
            res=>{
                this.messagefocus = res.data.data;
            },
            error=>{
                console.log(error)
            }
        )
    }

};
</script>
<style scoped>

</style>

