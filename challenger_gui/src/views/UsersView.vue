<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2">Users</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="users">
            <div class="col" v-for="user in users" :key="user.userID">
                <div class="card" style="width: 18rem;">
                    <img :src="user.profileURL" class="card-img-top" :alt="user.firstName">
                    <div class="card-body">
                      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
                      <p class="card-text"><span>Email Address: {{ user.emailAdd }}</span></p>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
            <SpinnerComp/>
        </div>
    </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue'
    export default {
        components: {
            SpinnerComp
        },
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        mounted() {
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>