<template>
  <div class="priceInfo">
    <h1>요금 정보</h1>
    <label for="monthPrice">월 별 가격</label>
    <input type="text" id="monthPrice" v-model="monthPrice">
    <br><br>
    <label for="yearPrice">년도 별 가격</label>
    <input type="text" id="yearPrice" v-model="yearPrice">
    <br><br>

    <div>
      <button v-on:click="prevPage">이전 페이지</button>
      <button v-on:click="nextPage">다음 페이지</button>
    </div>
    <!-- <router-link to="/product/addInfo">다음 페이지</router-link> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthPrice: this.getMonthPrice() || '',
      yearPrice: this.getYearPrice() || '',
    }
  },
  methods: {
    nextPage() {
      const price = {
        monthPrice: this.monthPrice,
        yearPrice: this.yearPrice,
      }
      this.$store.commit('priceInfo', price)
      this.$router.push('/product/addInfo')
    },
    prevPage() {
      this.$router.go(-1)
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
  }
}
</script>

<style>
.priceInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>