<template>
  <form @submit.prevent="onSubmit" class="form">
    <label class="search-label" for="search">User search</label>
    <input v-model='nameInputValue' class="search-field" id="search" type="search" name="search">
    <button class="search-btn" type="submit">Click me to start search</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        nameInputValue: '',
      }
    },
    name: 'SearchForm',
    methods: {
      onSubmit() {
        this.$emit('onSubmit', this.nameInputValue);
      }
    }
  }
</script>

<style scoped>
.form {
  margin-bottom: 20px;
}

.search-label {
  margin-right: 12px;
}

.search-field {
  min-width: 300px;
  height: 40px;
  border-radius: 5px;
  margin-right: 15px;
  border: 1px solid gray;
  padding: 8px
}

.search-btn {
  font-weight: 600;
  font-size: 1em;
  border: none;
  border-radius: 24px;
  background-color: rgb(19, 19, 165);
  color: #fff;
  height: 40px;
  max-width: 230px;
  padding: 10px 22px;
  cursor: pointer;
}

.search-btn:hover,
.search-btn:focus {
  color: rgb(246, 250, 33);
}
</style>
