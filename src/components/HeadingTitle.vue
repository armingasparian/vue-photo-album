<template>
  <div class="heading-title">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "HeadingTitle",
  props: {
    title: {
      type: String,
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
.heading-title {
  font-size: 30px;
  font-weight: bold;
  color: lightslategray;
  margin: 40px 0;
  padding: 0 16px;
}
</style>