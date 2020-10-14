<template>
  <div>
    <button v-on:click="defaultInfo" class="pad">상품 기본 정보</button>
    <button v-on:click="price" class="pad">요금 정보</button>
    <button v-on:click="additionalInfo" class="pad">부가 정보</button>
    <button v-on:click="cartFinal" class="pad">최종 확인</button>
  </div>
</template>

<script>
export default {
  methods: {
    defaultInfo () {
      console.log('defaultInfo');
      this.$emit('defaultInfo')
    },
    price () {
      console.log('price');
      this.$emit('price')
    },

  }

}
</script>

<style>
.pad {
  padding: 10px;
  border: 1px solid #000000;
  margin-right: 10px;
}

</style>