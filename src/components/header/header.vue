<template>
 <div>
    <header class="commonheader">
      <section>
          <router-link :to='linkback'>
            <span class="iconfont" :class="lticon"></span>
          </router-link>
          <div>
            <router-link :to="linkmenu"><span>{{ftheader}}</span></router-link>
            <router-link :to="linkmenuactive"><span>{{sdheader}}</span></router-link>
          </div>
          <span class="iconfont" :class="rticon"></span>
      </section>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ftheader: "关注",
      sdheader: "动态",
      lticon: "icon-account",
      rticon: "icon-search",
      linkback:'',
      linkmenu:'',
      linkmenuactive:''
    };
  },
  props: ["params"],
  mounted() {
    this.ftheader = this.params[0];
    this.sdheader = this.params[1];
    this.lticon = this.params[2];
    this.rticon = this.params[3];
    this.linkback = this.params[4];
    this.linkmenu = this.params[5];
    this.linkmenuactive = this.params[6];
  }
  // computed:{
  //   focus(){
  //     return this.param;
  //   }
  // }
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
  display: inline-block;
  color: #ffffff;
}

.commonbody {
  padding-top: 3rem;
}
.commonheader a {
  color: #fff;
}
</style>
