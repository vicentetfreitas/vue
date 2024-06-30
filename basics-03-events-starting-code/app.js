const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    removeNum(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
