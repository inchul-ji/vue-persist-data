<template>
  <div class="addInfo">
    <form>
      <h1>부가 정보</h1>
      <div class="title">
        <label for="title">제목</label> <br>
        <input type="text" id="title" v-model="title">
      </div>
      <div>
        <label for="contents">내용</label> <br>
        <textarea id="contents" rows="5" cols="33" v-model="contents"></textarea>
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
  data() {
    return {
      title: this.getTitle() || '',
      contents: this.getContents() || '',
    }
  },
  methods: {
    nextPage() {
      const info = {
        title: this.title,
        contents: this.contents,
      }
      this.$store.commit('addInfo', info);
      this.$router.push('/product/final');
    },
    prevPage() {
      this.$router.go(-1)
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
.addInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  margin-bottom: 20px;
}
</style>