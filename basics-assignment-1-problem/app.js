const app = Vue.createApp({
  data() {
    return {
      myName: "Vicente T",
      myAge: 32,
      myLinkImage: 'https://images.unsplash.com/photo-1719306061122-23537e67f83e?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    };
  },
  methods: {
    ageFiveFuture() {
      return this.myAge + 5;
    },
    myFavoriteNumber() {
      return   randomNumber = Math.floor(Math.random() * 2);
    },
  },
});

app.mount("#assignment");
