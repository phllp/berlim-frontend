<template>

  <footer>
    
    <a href="">
      <img src=""/>
    </a>
    
    <a target="blank" href="https://twitter.com/_phllp">
      <img class="social-logo" src="../assets/twitter.svg"/>
    </a>
    
    <a target="blank" href="https://www.linkedin.com/in/felipe-rafael-beiger-095405201/">
      <img class="social-logo" src="../assets/linkedin.svg"/>
    </a>

  </footer>
  
</template>

<script>

  export default {
    name: 'PageFooter'
  }

</script>

<style scoped>

  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav)
  }

  .social-logo{
    width: 60px;
  }

</style>