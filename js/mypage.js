var HomePage = {
    template:'#homepage'
}

var MyProfile = {
    template:'#profile'
}

var getOutputs = function(callback) {
       callback(null,
            axios.get('https://api.github.com/users/altrlz/repos')
            .then(function(response) {
                return response.data
            })
      )
}

var OutputList = {
    template:'#output-list',
    data: function() {
        return {
            loading: false,
            outputs: function() { return[] },
            error: null
        }
    },
    
    created: function() {
        this.fetchData()
    },
    
    watch: {
        '$route': 'fetchData'
    },
    
    methods: {
        fetchData: function() {
            this.loading = true
            getOutputs((function (err, outputs) {
                this.loading = false
                console.log('err:'+err)
                console.log('outputs:'+outputs)
                if (err) {
                    this.error = err.toString()
                } else {
                    outputs.then(function(response){
                        console.log(response)
                        console.log(response[0])
                        this.outputs = response
                    }.bind(this))
                }
            }).bind(this))
        }
    }
}



var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/profile',
      component: MyProfile
    },
    {
        path: '/outputs',
        component: OutputList
    }
  ]
})

var app = new Vue({
  el: '#app',
  router: router,
  data () {
    return {
        bottomNav: 'home'
    }
  }
})