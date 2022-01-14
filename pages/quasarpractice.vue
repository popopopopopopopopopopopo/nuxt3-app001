<template>
  <div>
    <q-btn :label="label" />
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
  }
}
</script>

<style scoped>

</style>
