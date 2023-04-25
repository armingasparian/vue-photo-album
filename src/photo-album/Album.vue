<template>
<router-link :to="`/albums/${album.id}`">
  {{album.title}}
</router-link>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "Album",
  props: {
    album: {
      //id
      //title
      //userId
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
a {
  background: darkcyan;
  color: white;
  border: none;
  padding: 10px;
  margin: 0 10px 5px 0;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
  width: 100%;
  text-align: center;
  display: block;
  text-decoration: none;
  cursor: pointer;
  font-family: Arial;
}
a:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}
</style>
