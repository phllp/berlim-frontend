<template>

  <header>

    <nav class="container">

      <a href="/">
        <img id="app-logo" src="../assets/logo-berlim-flag.svg"/>
        <p id="app-name">Berlim</p>
      </a>

    </nav>

  </header>

</template>

<script>

  export default {
    name: 'PageHeader'
  }


</script>

<style scoped>

header{
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav{
  display: flex;
  height: 60px;
  align-items: center;
}

nav a{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

#app-logo{
  width: 90px;
  margin-right: 15px;
}

#app-name{
  font-weight: 600;
  font-size: 40;
}

</style>