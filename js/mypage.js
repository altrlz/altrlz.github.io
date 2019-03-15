// ルートオプションを渡してルーターインスタンスを生成します
var router = new VueRouter({
  // 各ルートにコンポーネントをマッピングします
  // コンポーネントはVue.extend() によって作られたコンポーネントコンストラクタでも
  // コンポーネントオプションのオブジェクトでも構いません
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/profile',
      component: {
        template: '<div>自己紹介ページです。</div>'
      }
    }
  ]
})

// ルーターのインスタンスをrootとなるVueインスタンスに渡します
var app = new Vue({
  el: '#app',
  router: router,
  data : {
    message: 'test'
  }
})