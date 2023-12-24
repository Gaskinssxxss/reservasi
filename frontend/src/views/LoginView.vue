<template>
  <div class="bg-cyan-800">
    <div>
      <NavigationComp />
    </div>
    <div class="min-h-screen flex items-center justify-center -mt-48 md:-mt-20  px-5 sm:px-0">
      <div class="bg-white -mb-20 md:-mb-0 p-8 rounded shadow-md w-full sm:w-96">
        <h1 class="text-2xl font-semibold mb-6">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Email" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" v-model="password" id="password" placeholder="Password" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="role" class="block text-sm font-medium text-gray-600">Role</label>
            <select v-model="selectedRole" id="role" class="mt-1 p-2 w-full border rounded-md">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" class="w-full bg-cyan-700 text-white p-2 rounded-md hover:bg-cyan-500 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
    <div>
      <footerCompt></footerCompt>
    </div>
  </div>
</template>

<script>
import NavigationComp from "@/components/NavigationComp";
import footerCompt from "@/components/footerCompt.vue";

export default {
  name: "LoginView",
  components: {
    NavigationComp,
    footerCompt
  },
  data() {
    return {
      email: "",
      password: "",
      selectedRole: "user"
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.userLoggedIn;
    }
  },
  methods: {
    async login() {
      try {
        if (this.selectedRole === 'admin' && this.isUserLoggedIn) {
          await this.$router.push("/");
          return;
        }

        const roleToSend = this.isUserLoggedIn ? this.$store.state.userRole : this.selectedRole;

        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
          role: roleToSend
        });


        if (this.isUserLoggedIn && this.selectedRole === 'admin') {
          await this.$store.dispatch("setUserRole");
          this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/admin");
        } else {
          await this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
      }
    }
  }
}
</script>