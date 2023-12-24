<template>
  <div>
    <div>
      <NavigationComp class="bg-cyan-800"></NavigationComp>
    </div>
    <div class="">
      <section class="pt-20 md:pt-10 bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="text-center mt-12">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {{ user.username }}
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {{ user.email }}
                </div>
                <div class="flex justify-center space-x-3">
                  <div>
                    <button @click="showing">
                      <h1 class="text-center font-semibold text-cyan-700 hover:text-cyan-500">Reservasi</h1>
                      <div v-show="open">
                        <userProf></userProf>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button @click="shower">
                      <h1 class="text-center font-semibold text-cyan-700 hover:text-cyan-500">Contacts</h1>
                      <div v-show="ops">
                        <h1>Contact is Empty</h1>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {{ parseDate(user.registrationDate)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="pt-40 md:pt-32">
        <footerCompt class="bg-cyan-700"></footerCompt>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationComp from '@/components/NavigationComp.vue';
import footerCompt from '@/components/footerCompt.vue';
import userProf from '@/components/userProf.vue';

export default {
  name: "UserView",
  components: {
    NavigationComp,
    footerCompt,
    userProf
  },
  data() {
    return {
      open: false,
      ops: false
    }
  },
  methods: {
    parseDate(date) {
      return new Date(Date.parse(date)).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    showing() {
      this.open = !this.open
    },
    shower() {
      this.open = !this.open
    }
  },
  computed: {
    user() {
      this.parseDate(this.$store.state.user.registrationDate);
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.view-body {
  margin: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

span {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  font-size: 20px;
}
</style>