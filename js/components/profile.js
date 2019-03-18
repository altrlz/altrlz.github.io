var profileTemplate = `
            <v-card>
                <v-list>
                    <v-subheader>
                    Profile
                    </v-subheader>
                        <div v-for="profile in profiles">
                        <v-divider></v-divider>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title> {{ profile.title }} </v-list-tile-title>
                                    <v-list-tile-sub-title> {{ profile.field }} </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </div>
                </v-list>
            </v-card>
            `

var profileComponent = {
    template: profileTemplate,
    data: function() {
            return {
                profiles: [
                    {
                        title: 'Name',
                        field: 'altrlz'
                    },
                    {
                        title: 'age',
                        field: '31'
                    },
                    {
                        title: 'location',
                        field: 'Saitama/Japan'
                    },
                    {
                        title: 'test',
                        field: 'test'
                    }]
            }
            }
}