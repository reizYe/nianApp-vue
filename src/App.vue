<template>
  <div>
    <!-- <v-header></v-header> -->
    <router-view></router-view>
    <footer>
      <div class="tab">
        <div class="tab-item">
          <router-link to="/home">
            <i class="iconfont icon-account"></i>
          </router-link>
        </div>

        <div class="tab-item">
          <router-link to="/menu">
            <i class="iconfont icon-category"></i>
          </router-link>
        </div>

        <div class="tab-item">
          <router-link to="/adds">
            <div class="addbutton"><i class="iconfont icon-add"></i></div>
          </router-link>
        </div>

        <div class="tab-item">
          <router-link to="/message">
            <i class="iconfont icon-email"></i>
          </router-link>
        </div>

        <div class="tab-item">
          <router-link to="/search">
            <i class="iconfont icon-search"></i>
          </router-link>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
// import header from './components/header/header.vue'

export default {
  components: {
    // 'v-header': header,
    name: 'app'
  }
}
</script>

<style scoped>
footer {
  position: fixed;
  background-color: black;
  width: 100%;
  bottom: 0rem;
}

i {
  color: #908787;
  font-weight: 700;
}

i:hover {
  color: white;
}

footer>div>div {
  display: inline-block;
  width: 18%;
  text-align: center;
  margin: .5rem 0;
}

.icon-add {
  color: white;
}

.addbutton {
  background-color: rgba(0, 170, 200, 0.8);
  width: 40%;
  display: inline-block;
}

.bottomcontent {
  width: 100%;
  height: 3rem;
}

</style>
