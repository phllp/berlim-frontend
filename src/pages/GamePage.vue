<template>
  
  <main>

    <div id="outter-container">
      
      <div id="word-container">
        
      </div>
  
      <div id="der-container">
        <button class="button-56">DER</button>
      </div>
  
      <div id="die-container">
        <button class="button-56">DIE</button>
      </div>
  
      <div id="das-container">
        <button class="button-56">DAS</button>
      </div>

    </div>

  </main>

</template>

<script>

  export default {
    name: 'GamePage'
  }

</script>

<style scoped>

  #outter-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  #outter-container button{
    width: 100px;
    margin-top: 10px;
  }

</style>