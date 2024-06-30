const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.yourName;
    },
    submitForm() {
      alert("Submitted!");
    },
    setYourName(event, yourLastName) {
      this.yourName = event.target.value + " " + yourLastName;
    },
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
