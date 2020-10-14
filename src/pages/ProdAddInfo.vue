<template>
  <div class="addInfo">
    <form>
      <h1>부가 정보</h1>
      <div>
        <label for="title">제목</label>
        <input type="text" id="title">
      <div>
        <label for="contents">내용</label>
        <textarea id="contents" rows="5" cols="33"></textarea>
      </div>
      </div>
    </form>
    <br><br>

    <div>
      <button v-on:click="prevPage">이전 페이지</button>
      <button v-on:click="nextPage">다음 페이지</button><br>
    </div>
    <!-- <router-link to="final">다음 페이지</router-link> -->
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      console.log(this.productName);
      console.log(this.category);
      this.$router.push('/product/final')
    },
    prevPage() {
      this.$router.go(-1)

    }
  }
}
</script>

<style>
.addInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>