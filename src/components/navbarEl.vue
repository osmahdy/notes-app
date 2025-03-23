<template>
  <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/addnew">Add New</router-link>
  </nav>
  <router-view />
</template>


<script>
export default {
    
}
</script>

<style scoped>
nav {
  padding: 10px 20px;
  background-color: #1f2937;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  min-height: 50px;
  box-shadow: 0 5px 15px 0px #1F2937;
}
nav h1 {
  margin: 0;
}
nav .link {
  display: inline-block;
  font-weight: bold;
  color: white;
  margin: 0 10px;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  transform: scale(1);
  border: 3px solid transparent;
  transition: .3s;
}
nav .link:not(.router-link-active):before {
  content: "";
  display:block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  transition: .3s;
}
nav .link:hover{
  transform: scale(1.1);
}
nav .link:not(.router-link-active):hover:before {
  border: 3px solid white;
}

nav .link.router-link-exact-active {
  color: #ffd428;
  border: 3px solid #ffd428;
}
</style>