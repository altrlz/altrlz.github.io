var outputsTemplate =`
    <v-layout justify-center row wrap>
        <v-flex d-flex xs6 sm6 md6>
        <v-card>
            <div v-if="loading" class="text-xs-center">
                <v-progress-circular indeterminate style="margin-top:10rem;">
                </v-progress-circular>
            </div>
            <div v-if="error">
                {{ error }}
            </div>
            <!-- ロードされたら表示 -->
            <v-list two-line>
            <v-subheader>
                GitHub
            </v-subheader>
                <v-divider></v-divider>
                <div v-for="output in outputs">
                <v-list-tile avatar ripple>
                    <v-list-tile-avatar>
                            <v-img src="images/git.png" ></v-img>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                          <a v-bind:href="output.html_url">
                            <kbd>{{ output.name }}</kbd>
                          </a>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{ output.description }}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-chip color="teal" outline disabled="true">{{ output.language }}</v-chip>

                </v-list-tile>
            </div>
            </v-list>
        </v-card>
    </v-flex>
</v-layout>
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
