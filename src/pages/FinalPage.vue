<template>
  <div class="final">
    <h1>요약</h1>
    <form @submit.prevent="success">
      <label for="productName">상품명 </label> <br>
      <input type="text" id="productName" v-model="productName" readonly >
      <br><br>
      <label for="category">상품 분류  </label> <br>
      <input type="text" id="category" readonly v-model="category">
      <br><br>
      <div>
        <label for="month">월 별 가격 </label> <br>
        <input type="text" v-model="monthPrice" readonly>
      </div>
      <br><br>
      <div>
        <label for="year">년도 별 가격</label><br>
        <input type="text" v-model="yearPrice" readonly>
      </div>
      <br><br>
      <div>
        <label for="title">제목</label><br>
        <input type="text" id="title" v-model="title" readonly><br>
      </div>
      <br><br>
      <div>
        <label for="contents">내용</label><br>
        <textarea id="contents" rows="5" cols="33"  v-model="contents" readonly></textarea>
      </div>
      <br><br>
      <button v-on:click="prevPage">이전 페이지</button>
      <button type="submit">상품 등록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      category: '',
      monthPrice: '',
      yearPrice: '',
      title: '',
      contents: '',
    }
  },
  methods: {
    success() {
      console.log('ddd');
    },
    prevPage() {
      this.$router.go(-1)
    }
  }

}
</script>

<style>
.final {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>