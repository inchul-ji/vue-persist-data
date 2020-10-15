<template>
  <div class="final">
    <h1>요약</h1>
    <div>
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
        <button type="submit">상품 등록</button>
      </form>
      <br><br>
        <button v-on:click="prevPage">이전 페이지</button><br><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: this.getProductName() || '',
      category: this.getProductName() || '',
      monthPrice: this.getMonthPrice() || '',
      yearPrice: this.getYearPrice() || '',
      title: this.getTitle() || '',
      contents: this.getContents() || '',
    }
  },
  methods: {
    success() {
      // Actions - axios.post()
      // localStorage.removeItem('vuex')
      this.$store.commit('resetState');
      this.$router.push('/')
    },
    prevPage() {
      this.$router.go(-1)
    },
    getProductName() {
      if (localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product;
        return product.productName;
      }
    },
    getCategory() {
      let product = JSON.parse(localStorage.vuex).product;
      return product.category;
    },
    getMonthPrice() {
      if (localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product;
        return product.monthPrice;
      }
    },
    getYearPrice() {
      if (localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product;
        return product.yearPrice;
      }
    },
    getTitle() {
      if(localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product
        return product.title
      }
    },
    getContents() {
      if(localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product;
        return product.contents;
      }
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