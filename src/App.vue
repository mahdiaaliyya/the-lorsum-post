<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><h1>The Lorsum Post</h1></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&family=Poppins:wght@700;900&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  max-height: 100vh;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;

  }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 900;
  }


}
</style>
