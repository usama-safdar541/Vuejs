
<template>
  <div>
    <label for="goals"></label>
    <input type="text" v-model="enteredValue">
    <button v-on:click="addGoals">Add Goals</button>
    <ul>
      <li>{{ goals }}</li>
    </ul>
    <dIsplay></dIsplay>

    <div>
      <h1>{{ title }}</h1>
      <button v-on:click="add()">Add</button>
      <button v-on:click="subtract()">Subtract</button>
      <p>{{ number }}</p>
    </div>
    <nativeobj></nativeobj>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title: "this is my secind Code",
      number: 0,
      goals: [],
      enteredValue: ''
    };
  },




  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = ''
    },
    add() {
      this.number++;

    },
    subtract() {
      this.number--;
    }
  }
}
</script>


