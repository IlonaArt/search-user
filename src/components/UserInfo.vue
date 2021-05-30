<template>
  <div>
    <div class='margin'>User name: {{ user.login }}</div>
    <div class='margin'>User avatar: 
      <img width='40' height='40' :src='user.avatar_url'/>
    </div>
    <a :href='user.html_url'>User github url: {{ user.html_url }}</a>
    <br>
    <router-link to='/' class='link'>Back to search</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    name: 'UserInfo',
    created: function() {
      fetch(`https://api.github.com/user/${this.$route.params.id}`)
        .then(response => {
        return response.json();
        })
        .then(data => {
          this.user = data;
        })
        .catch(error => console.error(error))
    }
  }
</script>

<style scoped>
  .margin {
    margin-bottom: 10px;
  }
  img {
    vertical-align: middle;
    border-radius: 50%;
  }
</style>