<template>
    <div>
        <header class="commonheader">
    <section>
        <router-link to="/home"><span class="iconfont icon-back"></span></router-link>
        <div>
            <span class="addheader">新进展！</span>
        </div>
        <span class="iconfont icon-success"></span>
    </section>
</header>
<section class="commonbody">
    <article class="addbody">
      <div class="addshowtext" @click="toggle()">
          <img  :src="myimages">
          <span>{{choosetext}}</span>
          <b class="sprites2x"></b>
      </div>
    </article>
    <article @click="close()">
        <div class="addchoosetext" v-show="isshow" >
            <div ng-repeat="item in adds">
                <img :src="item.img">
                <span @click="selectdesc(item.description,item.img)">{{item.description}}</span>
            </div>
        </div>
    </article>
</section>
    </div>
</template>


<script>
export default {
    name:"commonbody",
    data(){
        return{
            myimages:"",
            isshow:false,
            adds:{

            }
        }
    },
    created(){
        this.$axios.get("api/home").then(
            res=>{
                this.adds = res.data.data;
            },
            error=>{
                console.log(error)
            }
        )
    },
    methods(){
      function selectdesc(x,y){

      }
    }

};
</script>

<style scoped>
.commonheader > section > div > span.addheader {
  color: white;
  font-size: 1rem;
}
.addinput {
  margin: 1rem 1rem 0 1rem;
}
.addselect {
  border: none;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
}
.addshowtext {
  border-bottom: 0.01rem solid #a9a9a9;
  padding: 0 1rem;
  height: 3rem;
}
.addshowtext > img,
.addchoosetext > div > img {
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  padding-top: 0.5rem;
  vertical-align: middle;
}
.addshowtext > span,
.addchoosetext > div > span {
  padding-left: 0.5rem;
  vertical-align: middle;
}

.addshowtext > b {
  display: inline-block;
  background-size: 500px;
  background-position: -80px -368px;
  width: 2rem;
  height: 2rem;
  padding-top: 0.5rem;
  vertical-align: middle;
  transform: rotate(90deg);
}
.addchoosetext > div {
  padding: 0 1rem;
}
</style>