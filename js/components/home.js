Vue.component('homepage',{
    template: `
             <v-card>
              <v-img
                class="white--text"
                height="400px"
                src="images/top.jpg"
                style="opacity: 0.7;"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="display-1 font-weight-light font-italic">Realize of the 31st year</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div style="height:200px;">
                  <span class="grey--text">Current feelings</span><br>
                  <span>人生のラストチャンスとおもってやる</span>
                </div>
              </v-card-title>
            </v-card>
            `
})