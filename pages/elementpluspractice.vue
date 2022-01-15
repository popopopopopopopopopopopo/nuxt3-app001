<template>
  <div>
    <el-button v-text="label" type="primary" :onclick="showalert" />
    <el-input v-model="value" placeholder="Please input" />
  </div>
</template>

<script lang="ts">
export default {
  name: "elementpluspractice",
  data : function () {
    return {
      label : "hogehoge",
      value : "hage~~~~~"
    }
  },
  methods : {
    showalert() {
      alert("foobar");
    }
  }
}
</script>

<style scoped>

</style>
