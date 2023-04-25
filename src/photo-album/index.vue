<template>
  <heading-title title="Photo Albums"/>
  <router-view />
</template>

<script>
import HeadingTitle from "@/components/HeadingTitle.vue";

export default {
  name: "Photos",
  components: {HeadingTitle},
}
</script>