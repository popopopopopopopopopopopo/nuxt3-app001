<template>
  <el-container style="height: 900px; border: 1px solid #eee">
    <el-container>
      <el-menu mode="horizontal">
        <el-menu-item index="1"><NuxtLink to="/">Home page</NuxtLink></el-menu-item>
        <el-menu-item index="2"><NuxtLink to="/about">About</NuxtLink></el-menu-item>
        <el-menu-item index="3"><NuxtLink to="/elementpluspractice">ElementPlus</NuxtLink></el-menu-item>
        <el-menu-item index="4"><NuxtLink to="/elspa">ElSpa</NuxtLink></el-menu-item>
      </el-menu>
      <el-main>
        <div>
          <h1>About</h1>
          <p>
            主にプログラミングや雑多なテクノロジを触っては自己満足しています。
          </p>
          <h2>居住地</h2>
          <p>とちぎけん</p>
          <h2>連絡先</h2>
          <button :onclick="alert">test alert</button>
          <!--    <amp-img-->
          <!--      src="/mail_address.png"-->
          <!--      layout="fixed"-->
          <!--      alt="メールアドレス"-->
          <!--      title="メールアドレス"-->
          <!--      width="187"-->
          <!--      height="17"-->
          <!--    />-->
        </div>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </el-container>
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
