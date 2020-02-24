<template>
  <div>
    <blog-card :title="myTitle" :subtitle="mySubtitle" :cover="myImage"></blog-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      myTitle: 'Hello',
      mySubtitle: 'Subtitle',
      myImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sherlock_Holmes_in_The_Five_Orange_Pips.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
}
</style>
