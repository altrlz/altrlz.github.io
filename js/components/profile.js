var profileTemplate = `
    <v-layout justify-center row wrap>
        <v-flex d-flex xs12 sm12 md5>
            <v-card>
                <v-card-title primary class="title font-weight-thin">Profile</v-card-title>
                <v-card-text>
                <table>
                    <tr v-for="profile in profiles">
                        <td> {{ profile.title }} </td>
                        <td class="pl-2 ma-2"> {{ profile.text }} </td>
                    </tr>
                </table>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm12 md5>
            <v-card>
                <v-card-title primary class="title font-weight-thin">Introduction</v-card-title>
                <v-card-text>
                    {{ introduction }}
                </v-card-text>
            </v-card>
        </v-flex>
        
    </v-layout>
`

var profileComponent = {
    template: profileTemplate,
    data: function() {
            return {
                profiles: [
                    {
                        title: 'name:',
                        text: 'altrlz'
                    },
                    {
                        title: 'age:',
                        text: '31'
                    },
                    {
                        title: 'location:',
                        text: 'Saitama/Japan'
                    },
                ],
                
                introduction: `
                    SIerからWebプログラマーにジョブチェンジすべく勉強中。
                    `
                
                
                
            }
            }
}