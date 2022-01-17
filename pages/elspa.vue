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
        <el-container style="border: 1px solid #eee">
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
                <el-menu-item-group>
                  <template slot="title">Group 1</template>
                  <el-menu-item index="1-1">Option 1</el-menu-item>
                  <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                  <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">Option4</template>
                  <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
                <el-menu-item-group>
                  <template slot="title">Group 1</template>
                  <el-menu-item index="2-1">Option 1</el-menu-item>
                  <el-menu-item index="2-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                  <el-menu-item index="2-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                  <template slot="title">Option 4</template>
                  <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
                <el-menu-item-group>
                  <template slot="title">Group 1</template>
                  <el-menu-item index="3-1">Option 1</el-menu-item>
                  <el-menu-item index="3-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                  <el-menu-item index="3-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">Option 4</template>
                  <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container>
            <el-main>
              <el-button v-text="label" type="primary" :onclick="showalert" />
              <el-input v-model="value" placeholder="Please input" />
            </el-main>
            <el-footer>

            </el-footer>
          </el-container>
        </el-container>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">

class Person {
  Name:string
  Age:number
  constructor(name:string, age:number) {
    this.Name = name;
    this.Age = age;
  }
  show() :string {
    return this.Name + this.Age;
  }
}

export default {
  name: "elspa",
  data : function () {
    return {
      label : "hogehoge",
      value : "hage~~~~~"
    }
  },
  methods : {
    showalert() {
      alert(new Person("hogehoge", 102).show());
    }
  }
}
</script>

<style scoped>

</style>
