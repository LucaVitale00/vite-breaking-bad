<script>

export default {

};
</script>

<template>
  <section>
    <div class="logo-container d-flex">
      <img src="../assets/img/logo-png-popsocket-rick-and.png" class="logo" alt="">
      <h1>Rick and Morty</h1>
    </div>

    <div class="container">
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

section {
  background-color: rgb(46, 58, 70);
  padding: 3rem;
}

.logo-container {
  align-items: center;
  color: white;
  margin-bottom: 2rem;
}

.logo {
  width: 100PX;
  border-radius: 50%;
  margin-right: 2rem;
}

.container {
  background-color: rgb(46, 58, 70);
}

.btn {
  background-color: white;
  color: black;
}
</style>
