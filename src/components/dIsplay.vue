<template>
  <div>
    <ul>
      <h1>{{ title }}</h1>
      <li>{{ name }}</li>
      <li>{{ age }}</li>
      <li>{{ course }}</li>
    </ul>
  </div>
</template>

<script>
// import display from './dIsplay.vue'
export default {
  data() {
    return {
      title: 'working',
      name: 'Usama',
      age: 26,
      course: 'vuejs'
    }
  },
  methods: {
    MYdata() {
      this.name + "And the Age is" + this.age + "And the course is" + this.course;
    },
  }

}

</script>
