<template>
  <div>
    <q-btn :label="label" :onclick="showalert"/>
    <q-input filled v-model="value" />
  </div>
</template>

<script lang="ts">
export default {
  name: "quasarpractice",
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
