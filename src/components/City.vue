<template>
  <div class="container">
  
    <h1>EGCI427 Practice</h1>
    
    <div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">List of cities</h3>
  </div>
  <div class="panel-body">
   
  
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <!-- <img src="..." alt="..."> -->
      <div class="caption">
      <!-- <img class="text-left" id="plane-logo" v-bind:src='".././assets/p1.png"' height="150" width="150" /> -->
      <img :src="`/static/${city[0].image}`" width=80%>
        <h3>{{city[0].name}} </h3>
        <p>{{city[0].detail}}</p>
      
        <router-link :to="{ path: 'weather/' + city[0].name}" class="btn btn-sm btn-success " tag="button" type="button">
          <span>Detail</span>
                  </router-link>
      </div>
    </div>
  </div>


   
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <!-- <img src="..." alt="..."> -->
      <div class="caption">
     <img :src="`/static/${city[0].image}`" width=80%>
        <h3>{{city[1].name}} </h3>
        <p>{{city[1].detail}}</p>
<router-link :to="{ path: 'weather/' + city[1].name}" class="btn btn-sm btn-success " tag="button" type="button">
  <span>Detail</span>
                  </router-link>
      </div>
    </div>
  </div>


   
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <!-- <img src="..." alt="..."> -->
      <div class="caption">
      <img :src="`/static/${city[2].image}`" width=80%>
        <h3>{{city[2].name}} </h3>
        <p>{{city[2].detail}}</p>
        <router-link :to="{ path: 'weather/' + city[2].name}" class="btn btn-sm btn-success " tag="button" type="button">
          <span>Detail</span>
                  </router-link>
        <!-- <p><a href="#/weather/"+{{city[2].name}} class="btn btn-primary" role="button">Button</a> </p> -->
      </div>
    </div>
  </div>


  </div>
</div>
  

<button  class="btn btn-primary" role="button" @click="logout">logout</button>
    </div>




  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'users',
  data () {
    return {
      Users: [],
      uid: '',
      search: '',
      city: []
    }
  },
  methods: {
    delUser (userId) {
      var url = 'http://localhost:8082/users/' + userId
      axios.delete(url)
        .then((response) => {
          console.log('Delete UserId: ' + userId)
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    },
    DELETE (id) {
      // eslint-disable-next-line
      $('#my-modal').modal('show')
      this.uid = id
    },
      logout () {
localStorage.removeItem('Token')
window.location.href = "http://localhost:8080/#/"
    }
  },
  computed: {
    filteredUsers: function () {
      return this.Users.filter((user) => {
        return user.firstName.match(this.search) || user.lastName.match(this.search)
      })
    }
  },
  mounted () {
    //     console.log("Mounnted")
    if(localStorage.getItem('Token') == null){
      window.location.href = "http://localhost:8080/#/"
    }
    axios.get('http://localhost:8082/cities')
      .then((response) => {
        console.log(response.data)
        this.city = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<style>

  .thumbnail {
      margin-top: 40px;
  }

  #profile-img{
    height:170px;
    width:auto;
    max-width:500px;
      
  }



</style>



// mame url

// https://www.iphone-droid.net/wp-content/uploads/2013/09/Mamegoma-icon.png