<template>
    <div>
        <!-- <input type="text" v-bind:value="name" v-on:input="setName($event, 'Safdar') " v-on:keyup.enter="enteredInput"> -->
        <input type="text" v-model="name" />
        <!-- <input type="text" v-model="enteredvalue1">
<button type="submit" v-on:click="setName" >Click</button> -->
        <p>Your Name:{{ fullname }}</p>
        <button v-on:click="resetInput"></button>
    </div>
</template>

<script>
// import { METHODS } from 'http';

export default {
    data() {
        return {
            enteredvalue1: "",
            name: "",
            fullname: '',
      // age:26
    };
    },
    //   computed: {
    //     fullName() {
    //       console.log("Running");
    //       if (this.name === "") {
    //         return "";
    //       }
    //       return this.name + "" + "Safdar";
    //     },
    //   },

    watch: {
        name(values) {
            if (values === '') {
                this.fullname = '';
            } else {
                this.fullname = values + '' + this.lastname;
            }
        },
        lastname(values) {
            if (values === '') {
                this.fullname = '';
            } else {
                this.fullname = this.name + '' + values;
            }
        }
    },
    methods: {
        enteredInput() {
            this.enteredvalue1 = this.name;
        },

        resetInput() {
            this.name = "";
        },
        setName(event) {
            this.name = event.target.value;
        },

        // setName(){
        //     this.name.push(this.enteredvalue1);
        //     this.enteredvalue1=''
        // }
    },
};
</script>
