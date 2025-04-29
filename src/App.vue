<script setup lang="ts">
  const postList: HTMLElement[] = Array.from(document.querySelectorAll("a.largeimg"))

  async function getLargeImgLink() {
    if(postList) {  
      let linkList = postList.map(el => el.href)
      await navigator.clipboard.writeText(linkList.join("\n\n"))
      alert("复制成功！")
    }
  }
</script>

<template>
  <button class="user-btn" v-if="postList.length > 0" 
          @click="getLargeImgLink">复制当前页面大图链接</button>
</template>

<style scoped>
  .user-btn {
    position: fixed;
    top: 5px;
    right: 5px;
    background-color: turquoise;
  }
</style>
