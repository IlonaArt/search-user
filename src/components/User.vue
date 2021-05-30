<template>
  <router-link :to='getRoute' class="user">{{ login }}</router-link>
</template>

<script>
  export default {
    name: 'User',
    props: {
      login: String,
      id: Number,
    },
    computed: {
      getRoute() {
        return `/user/${this.id}`;
      }
    },
  }
</script>

<style scoped>
.user {
  font-size: 1.5em;
  text-decoration: none;
  color: #000;
}

.user:hover,
.user:focus {
  color: rgb(158, 12, 216);
}
</style>
