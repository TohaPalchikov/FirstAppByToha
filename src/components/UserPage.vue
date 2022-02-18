<template>
  <my-header />
  <img
    src="https://cdn.lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825-1280x640.jpg"
    alt=""
    width="1600px"
    height="100px"
  />
   <p>{{user.name}}</p>
   <p></p>
   <p></p>
   <p></p>
</template>

<script>
import MyHeader from "./MyHeader.vue";
export default {
  props: ["user"],
  components: {
    MyHeader,
  },
};
</script>