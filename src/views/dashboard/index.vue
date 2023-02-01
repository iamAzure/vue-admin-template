<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-card v-for="post in posts" :key="post.id" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ post.title }}</span>
      </div>
      <div class="text item">
        {{ post.body }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as API from './api'

export default {
  name: 'Dashboard',
  data() {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    API.getPosts().then(data => {
      this.posts = data
      console.log('data===>', data)
    }).catch(err => {
      console.log('err===>', err)
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    .box-card{
      margin-bottom: 10px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
</style>
