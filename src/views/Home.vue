<template>
  <div class="home">
    <van-row>
      <van-col span="3">32</van-col>
      <van-col span="16">3</van-col>
      <van-col span="5">4</van-col>
    </van-row>
  </div>
</template>

<script>
import { home } from '@/api';

export default {
  name: 'Home',
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        let res = await home({})
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      
    }
  },
}
</script>
