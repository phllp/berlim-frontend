<template>
  
  <main>

    <div id="outter-container">
      
      <div id="word-container">
          <p>Worte</p>
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

  #word-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 200px;
    height: 60px;
    background-color: wheat;
    box-shadow: black 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 18px;
  }

  #word-container p{
    font-size: 25px;
  }

</style>