var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: {
      template: '<homepage></homepage>'
      }
    },
    {
      path: '/profile',
      component: profileComponent
    },
    { 
      path: '/outputs',
      component: outputComponent
    }
  ]
})

var app = new Vue({
  el: '#app',
  router: router
})