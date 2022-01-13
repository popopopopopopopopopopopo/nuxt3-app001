<template>
  <div className="mt-10">
    <h1 className="text-2xl font-bold">About</h1>
    <p className="mt-2">
      主にプログラミングや雑多なテクノロジを触っては自己満足しています。
    </p>
    <h2 className="text-xl font-bold mt-5">居住地</h2>
    <p className="mt-2">とちぎけん</p>
    <h2 className="text-xl font-bold mt-5">連絡先</h2>
    <button onclick="alert()"></button>
    <!--    <amp-img-->
    <!--      src="/mail_address.png"-->
    <!--      layout="fixed"-->
    <!--      alt="メールアドレス"-->
    <!--      title="メールアドレス"-->
    <!--      width="187"-->
    <!--      height="17"-->
    <!--    />-->
  </div>
</template>

<script lang='ts'>
export default {
  name: 'about',
  methods: {
    alert() {
      window.alert("hogehoge");
    }
  }
}
</script>

<style scoped>

</style>
