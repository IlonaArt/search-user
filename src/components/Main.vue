<template>
  <div>
    <search-form @onSubmit="onSubmit"></search-form>
    <user-list :users="users"></user-list>
  </div>
</template>

<script>
  import SearchForm from './SearchForm.vue';
  import UserList from './UserList.vue';

  export default {
    components: {
      SearchForm,
      UserList
    },
    data() {
      return {
        users: [],
        userName: '',
        pageCounter: 1,
        perPage: 30,
        totalUserAmount: 0,
      }
    },
    created: function() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      getUser(userName) {
        fetch(`https://api.github.com/search/users?q=${userName}&page=${this.pageCounter}&per_page=${this.perPage}`, {
          method: 'GET',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          this.totalUserAmount = json.total_count;
          if (json.items) {
            this.users.push(...json.items);
          }
        })
        .catch(error => console.error(error))
      },
      onSubmit(userName) {
        if (this.userName !== userName) {
          this.users = [];
          this.pageCounter = 1;
        }
        this.userName = userName;
        this.getUser(userName);
      },
      handleScroll() {
        if (this.users.length !== this.totalUserAmount) {
          if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
            this.pageCounter += 1;
            this.getUser(this.userName);
          }
        }
      }
    },
  }
</script>