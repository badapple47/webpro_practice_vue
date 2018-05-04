<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Sign Up</h4>
        <div class="form-group" >
          <label class="pull-left">Email</label>
          <input type="text" class="form-control" placeholder="Email" v-model="User.email">
        </div>
        <div class="form-group" >
          <label class="pull-left">Password</label>
          <input type="password" class="form-control" placeholder="Sign Up" v-model="User.password">
        </div>
        
      <button id ="login-Btn" type="button" class="btn btn-success" @click="addToAPI">save</button>

      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      User: {

        email: '',
        password: '',

      }
    }
  },
  methods: {
    addToAPI () {
      let newUser = {

        email: this.User.email,
        password : this.User.password,

      }
      console.log(newUser)
      axios.post('http://localhost:8082/authen/createAUser', newUser)
        .then((response) => {
          console.log(response)
          window.location.href = "http://localhost:8080/#/home"
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
