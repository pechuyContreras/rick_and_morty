<template>
<div class="container">
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <h1>Rick and Morty</h1>
  <FilterbyName/>
  <br>
  <FilterByStatus/>
  <ListCharacters/>
  <router-view/>
</div>
  
</template>


<script>
import FilterByStatus from '@/components/FilterByStatus'
import ListCharacters from '@/components/ListCharacters'
import FilterbyName from '@/components/FilterbyName'
export default {
  name:'App',
  components:{
    ListCharacters,FilterByStatus,FilterbyName
  }
}
</script>
<style lang="scss">
:root {
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
