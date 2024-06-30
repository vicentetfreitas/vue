const app = Vue.createApp({
  data() {
    return {
      myName: "Vicente T",
      myAge: 32,
      myLinkImage: 'https://picsum.photos/200/300'
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
