<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view path="$router.key"/>
  </div>
</template>

<script>
import './styles/global.css'
import PageHeader from './components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>

</style>
