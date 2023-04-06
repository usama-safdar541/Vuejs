<template>
    <div>
        <section>
            <h1> DYnamic Css Inline Style</h1>
            <div :class="['demo',{active:boxASelected }]"  @click="changeColors('A')"
                @dblclick="revertColors('A')">DIv A</div>
            <div :class="['demo',{active:boxBSelected }]"   @click="changeColors('B')"
                @dblclick="revertColors('B')">Div B</div>>
            <div :class="['demo',{active:boxCSelected }]"   @click="changeColors('C')"
                @dblclick="revertColors('C')">
            </div>
            <!-- :style="{ borderColor: boxASelected ? 'red' : 'gray' }"  INline CSs SYntax -->
            <!-- SYntax 2  :class="boxASelected ? 'demo active' : 'demo'"    -->
            <!-- Array Syntax :class="['demo',{active:boxASelected }] -->
        </section>
    </div>
</template>


<script>
export default {
    data() {
        return {

            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },


    methods: {

        changeColors(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;

            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            }
            else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }

        },

        revertColors(box) {

            if (box === 'A') {
                this.boxASelected = false;

            } else if (box === 'B') {
                this.boxBSelected = false;
            }
            else if (box === 'C') {
                this.boxCSelected = false;
            }

        },
    }
};
</script>

<style scoped>
.demo {
    display: flex;
    justify-content: center;
    height: 200px;
    width: 100%;
    border: 2px solid;
    /* border-color: red; */
}
.active{
background-color: rebeccapurple;
border: 2px solid red;

}
</style>