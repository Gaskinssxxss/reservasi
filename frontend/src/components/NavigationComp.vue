<template>
  <nav class="px-0 md:px-4 py-2 md:py-5">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="flex items-center mt-3 md:mt-0 -mb-2 md:-mb-14">
        <router-link to="/" class="flex items-center">
          <img src="../../public/logo.png" alt="logo" class="w-64 md:w-72 h-24 md:h-40 -mt-5 md:-mt-10 -ml-28 md:-ml-5">
        </router-link>
      </div>

      <div class="ml-0 md:ml-10 xl:ml-32">
        <div class="hidden md:flex items-center space-x-10">
          <div>
            <router-link to="/" class="text-white hover:text-cyan-500">Home</router-link>
          </div>
          <div>
            <router-link to="/kursi" class="text-white hover:text-cyan-500">Reservasi</router-link>
          </div>
          <div>
            <router-link to="/gallery" class="text-white hover:text-cyan-500">Gallery</router-link>
          </div>
          <div>
            <router-link to="/about" class="text-white hover:text-cyan-500">About</router-link>
          </div>
        </div>
      </div>

      <div class="hidden md:flex items-center space-x-3 mr-0 md:mr-10">
        <div class=" space-x-3 mr-10 flex">
          <div v-if="!user" class="mr-2">
            <router-link to="/login" class="text-white hover:text-cyan-500">Login</router-link>
          </div>
          <div v-if="!user">
            <router-link to="/register" class="text-white hover:text-cyan-500">Register</router-link>
          </div>
        </div>

        <div class="mr-5">
          <div class="space-x-4 flex">
            <div v-if="user" class="">
              <router-link to="/user" class="text-white hover:text-cyan-500">{{ user.username }}</router-link>
            </div>
            <div v-if="user" @click="logout" class="text-white cursor-pointer hover:text-cyan-500">
              Log out
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="flex md:hidden -mt-14 md:-mt-20 ml-52 text-white" @click="show">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div v-show="open" class="pt-10 -ml-20 text-right">
            <div class="">
              <div>
                <router-link to="/" class="text-white hover:text-cyan-500">Home</router-link>
              </div>
              <div>
                <router-link to="/kursi" class="text-white hover:text-cyan-500">Reservasi</router-link>
              </div>
              <div>
                <router-link to="/gallery" class="text-white hover:text-cyan-500">Gallery</router-link>
              </div>
              <div>
                <router-link to="/about" class="text-white hover:text-cyan-500">About</router-link>
              </div>
              <div v-if="user" class="">
                <router-link to="/user" class="text-white">Profile</router-link>
              </div>
              <div v-if="user" @click="logout" class="text-white cursor-pointer">
                Log out
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavigationComp",
  data() {
    return {
      open: false
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        if (!this.isUserLoggedIn) {
          this.$toast.success("Successfully logged out.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/login");
        }
      }
      catch (e) {
        console.log(e);
        this.$toast.error("Couldn't log out.", { position: "bottom-left", duration: 1000 });
      }
    },
    show() {
      this.open = !this.open
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { RouterLink }
}
</script>
