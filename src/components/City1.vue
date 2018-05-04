<template>
  <div class="container">
  
    <h1>EGCI427 Practice</h1>
    


    <div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Miami</h3>
  </div>
  <div class="panel-body">
   
  <div class="col-md-6">



<p>Location : {{this.weather.list[0].coord.lat}} , {{this.weather.list[0].coord.lon}} </p>
<p>Pressure : {{this.weather.list[0].main.pressure}} </p>
<p>Main weather : {{this.weather.list[0].weather[0].main}} </p>
 


  </div>

  <div class="col-md-6">



   <p>Temperature : {{this.weather.list[0].main.temp}} </p>
<p>Humidity : {{this.weather.list[0].main.humidity}}</p>
<p>Description : {{this.weather.list[0].weather[0].description}} </p>
 


  </div>


</div>
  

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
      city: [],
      weather: []
      
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
    // if(localStorage.getItem('Token') == null){
    //   window.location.href = "http://localhost:8080/#/"
    // }
    let APIKEY = '8401c953bf6da750a982308bf17ad82d'
    //   var url = 'http://api.openweathermap.org/data/2.5/find?q=' + this.city[0].name +'&type=accurate&appid=' + APIKEY + '&units=metric'


    axios.post('http://api.openweathermap.org/data/2.5/find?q=' + 'miami' +'&type=accurate&appid=' + APIKEY + '&units=metric')
      .then((response) => {
        // console.log(response.data)
        this.weather = response.data
        console.log(this.weather)

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