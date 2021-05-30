<template>
  <ul class="list">
    <li class="item" v-for='user in users' :key='user.id'>
      <User :id='user.id' :login='user.login'></User>
    </li>
  </ul>
</template>

<script>
  import User from './User.vue';
  export default {
    components: {
      User,
    },
    name: 'UserList',
    props: {
      users: Array,
    },
  }
</script>

<style scoped>
  .list {
    list-style: none;
    margin: 0;
    padding-left: 0;
    margin-top: 30px;
  }
  .item {
    margin-bottom: 7px;
  }
</style>