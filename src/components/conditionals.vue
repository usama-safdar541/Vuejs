<template>
    <div>
        <label>Add goal</label>
        <input type="text" v-model="enteredValue">
        <p v-if="mygoals.length === 0"> NO Goals in the directory</p>
        <button @click="addGoals" type="submit">Goals</button>
        <ul>
            <li @click="removeGoals(index)" :key="goal" v-for="( goal, index) in mygoals ">
                <p>{{ index }} - {{ goal }}</p>
                <input type="text" @click.stop>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enteredValue: '',
            mygoals: [],
        }
    },
    methods: {
        addGoals() {
            this.mygoals.push(this.enteredValue);
        },
        removeGoals(idx) {
            this.mygoals.splice(idx, 1);
        }


    }

}

</script>