<template>
 <div>
     <header class="commonheader">
    <section>
        <span class="iconfont" :class="lticon"></span>
        <div>
            <router-link to="/menu"><span>{{ftheader}}</span></router-link>
            <router-link to="/menu/menuactive"><span>{{sdheader}}</span></router-link>
        </div>
        <span class="iconfont" :class="rticon"></span>
    </section>
</header>
 </div>
</template>


<script>
export default {
  data(){
    return{
      ftheader:"关注",
      sdheader:"动态",
      lticon:"icon-account",
      rticon:"icon-search"
    }
  },
  props:['param'],
  computed:{
    set(){
      ftheader=this.param[0];
      console.log(ftheader)
    },
    // ftheader:function(){
    //   return this.param;
    // },
    
    // sdheader(){
    //   return "1"
    // }
  }
};
</script>

<style scoped>
.commonheader {
  background-color: #0c0c0c;
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
}

.commonheader > section {
  padding: 1rem 0 0.8rem 0;
  margin: 0 2.5%;
  width: 95%;
  text-align: center;
}

.commonheader > section > div {
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
.commonheader a {
  color: #fff;
}
</style>
