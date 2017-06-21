<template>
  <div class="hello">
    <img src="../assets/ms-icon-150x150.png">
    <h1>{{ msg1 }}</h1>
    <h2><a href="/#/EPM_VDT">{{ msg2 }}</a></h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg1: 'Welcome to BONC EPM_VDT',
      msg2: 'ENTER EPM_VDT'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration-line: none;
}
</style>
