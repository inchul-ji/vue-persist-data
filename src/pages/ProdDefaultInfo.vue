<template>
  <div class="defaultInfo">
    <h1>상품 기본 정보</h1>
    <form>
      <label for="productName">상품명</label> <br>
      <input type="text" id="productName" v-model="productName">
      <br><br>
      <label for="category">상품 분류</label> <br>
      <select v-model="category" id="category">
        <option disabled value="">Please select one</option>
        <option value="devops">DevOps</option>
        <option value="cloud">Cloud</option>
        <option value="deploy">Deploy</option>
        <option value="develop">Develop</option>
      </select>
      <br><br>
    </form>
    <br><br>
    <div>
      <button v-on:click="prevPage">이전 페이지</button>
      <button v-on:click="nextPage">다음 페이지</button><br>
      <!-- <router-link to="priceInfo">다음 페이지</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: this.getProductName() || '',
      category: this.getCategory() ||'',
      // productName: this.fetchedProdName()|| '',
      // category: this.fetchedCategory() ||'',
    }
  },
  // created() {
  //   this.fetchedProdName()
  //   this.fetchedCategory()
  // },
  // updated() {
  //   this.fetchedProdName()
  //   this.fetchedCategory();

  // },
  methods: {
    nextPage() {
      const defaultInfo = {
        productName: this.productName,
        category: this.category,
      }
      this.$store.commit('defaultInfo', defaultInfo);
      this.$router.push('/product/priceInfo');
    },
    prevPage() {
      this.$router.go(-1)

    },
    getProductName() {
      if (localStorage.vuex) {
        let product = JSON.parse(localStorage.vuex).product;
        // let product = JSON.parse(localStorage._secure__ls__metadata).product;
        return product.productName;
      }
    },
    getCategory() {
      let product = JSON.parse(localStorage.vuex).product;
      return product.category;
    },
    // fetchedProdName() {
    //   // return this.$store.getters.fetchedProdName
    //   console.log('fetchedProdName:', this.$store.state.product.productName);
    //   return this.$store.state.product.productName
    // },
    // fetchedCategory() {
    //   // return this.$store.getters.fetchedProdName
    //   console.log('fetchedProdName:', this.$store.state.product.category);
    //   return this.$store.state.product.category
    // }

  }

}
</script>

<style scoped>
.defaultInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>