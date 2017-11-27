<template>
   <header class="commonheader">
    <section>
        <span class="iconfont icon-account"></span>
        <div>
            <router-link to="/menu"><span>关注</span></router-link>
            <router-link to="/menu/menuactive"><span>动态</span></router-link>
        </div>
        <span class="iconfont icon-search"></span>
    </section>
</header>
</template>


<script>
    export default {  
    }
</script>

<style scoped>
.commonheader {
  background-color: #0c0c0c;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
}

.commonheader>section {
  padding: 1rem 0 .8rem 0;
  margin: 0 2.5%;
  width: 95%;
  text-align: center;
}

.commonheader>section>div {
  display: inline-block;
  text-align: center;
  width: 65%;
}

.commonheader span {
  /*text-align: center;*/
  display: inline-block;
  margin: 0 1rem;
  color: #ffffff;
}

.commonbody {
  padding-top: 3rem;
}
.commonheader a{
    color: #fff;
}
</style>
