<template>
  <div id="app">
    <PageHeader></PageHeader>
    <router-view path="$router.key"/>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import './styles/global.css'
import './styles/button.css'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>

</style>
