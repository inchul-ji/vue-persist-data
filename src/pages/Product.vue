<template>
  <div>
    <div>
      <h1>계약 조건</h1>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi soluta unde dicta laudantium architecto? Est, alias reiciendis eveniet impedit beatae saepe totam eos repellat id, esse, deleniti quis fuga commodi.</div>
    </div>
    <button v-on:click="step" class="btn"> 계속 진행 </button>
    <div class="style">
      <template v-if="temp">
        <hr>
        기존에 작성된 내용이 있습니다. 이어서 작성하시겠습니까???????
        <div>
          <button v-on:click="begin" class="btn">
            처음부터 작성 하기
          </button>
          <button v-on:click="connected">
            이어서 작성 하기
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: false,
    }
  },
  methods: {
    step() {
      if(localStorage.vuex) {
        this.temp = JSON.parse(localStorage.vuex).product.productName !== '' ? true : false;
        if(!this.temp) {
          this.$router.push('/product/defaultInfo');
        }
      } else {
        this.$router.push('/product/defaultInfo');
      }
    },
    connected() {
      this.$router.push('/product/defaultInfo');
    },
    begin() {
      // localStorage.removeItem('vuex')
      // let product = JSON.parse(localStorage.vuex).product;
      this.$store.commit('resetState');
      this.$router.push('/product/defaultInfo');
    }
  }
}
</script>

<style scoped>
.temp {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #000000;
  color: #ffffff;
  margin-top: 30px;
  border: 1px solid #000000;
}
.style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px
}

.btn {
  margin: 20px
}

.step-btn {
  text-align: center;
}
</style>