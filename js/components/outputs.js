var outputsTemplate =`
       <v-card>
            <div v-if="loading" class="text-xs-center">
                <v-progress-circular indeterminate style="margin-top:10rem;">
                </v-progress-circular>
            </div>
            <div v-if="error">
                {{ error }}
            </div>
            <!-- ロードされたら表示 -->
            <div v-for="output in outputs">
                <h2> {{ output.name }} </h2>
            </div>
        </v-card>
        `


var getOutputs = function(callback) {
       callback(null,
            axios.get('https://api.github.com/users/altrlz/repos')
            .then(function(response) {
                return response.data
            })
      )
}

var outputComponent = {
    template: outputsTemplate,
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
                if (err) {
                    this.error = err.toString()
                } else {
                    outputs.then(function(response){
                        this.outputs = response
                    }.bind(this))
                }
            }).bind(this))
        }
    }
}
