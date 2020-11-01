<template>
    <div>
        <h1> Memorize Application </h1>
        <input type="radio" id="memorize" name="type" value="memorize" v-model="type">
        <label for="memorize">Memorize</label><br>
        <input type="radio" id="revise" name="type" value="revise" v-model="type">
        <label for="revise">Revise</label><br>
        <input type="radio" id="practise" name="type" value="practise" v-model="type">
        <label for="practise">Practise</label>
        <input type="radio" id="straight" name="practise" value="straight" v-model="practise">
        <label for="practise">Straight</label>
        <input type="radio" id="reverse" name="type" value="reverse" v-model="practise">
        <label for="practise">Reverse</label>
        <input type="radio" id="jumble" name="type" value="jumble" v-model="practise">
        <label for="practise">Jumble</label>
        <hr>
        <label for="practise">Count</label>
        <input type="number" v-model="count">
        <label for="practise">Rep</label>
        <input type="number" v-model="rep">
        
        <hr>
        <button type="button" @click="setPractise">Practise</button>
        <button type="button" @click="clearPractise">Clear</button>
        <hr>
        <h1>{{ type }}</h1>
        <h1>{{ practiseArray }}</h1>
        <h1>{{ practiseArray[practiseIndex] }}</h1>
        <button type="button" @click="nextOption">Next</button>
    </div>
</template>

<script>
export default {
    name: 'Memorize',
    data: function(){
        return {
            type: null,
            practise: null,
            count: 0,
            rep: 0,
            practiseArray: [],
            practiseIndex: 0,
        }
    },
    methods: {
        setPractise(){
            console.log('Set the Practise Mode')
            this.practiseArray = []
            this.practiseIndex = 0
            switch(this.type){
                case 'memorize':
                    this.practiseArray = this.buildPractiseArray(this.count, 10, 5, 10, 3)
                    break;
                case 'revise':
                this.practiseArray = this.buildPractiseArray(this.count, 5, 3, 5, 3)
                    break;
                case 'practise':
                    if(this.practise === 'straight'){
                        this.practiseArray = this.buildPractiseArray(this.count, this.rep, 0, 0, 0)
                    } else if (this.practise === 'reverse'){
                        this.practiseArray = this.buildPractiseArray(this.count, 0, this.rep, 0, 0)
                    } else if (this.practise === 'jumble') {
                        this.practiseArray = this.buildPractiseArray(this.count, 0, 0,this.rep, 0)
                    }
                    break;
            }
        },
        clearPractise(){
            console.log('Reset Practise')
        },
        nextOption(){
            console.log('Next Option')
            this.practiseIndex += 1
        },
        buildPractiseArray(count, straightCnt, reverseCnt, jumbleCnt, endStraightCnt) {
            let pracArr = []
            const elementStraight = Array.from({length: count}, (_, i) => i + 1)
            const elementReverse = Array.from({length: count}, (_, i) => count - i)
            
            // Add Straight Array with iterations
            for(let i=0; i<straightCnt; i++){
                pracArr.push(...elementStraight)
            }

            // Add Reverse Array with iterations
            for(let i=0; i<reverseCnt; i++){
                pracArr.push(...elementReverse)
            }

            // Add Jumbled Array with iterations
            for(let i=0; i<jumbleCnt; i++){
                // pracArr.push(...Array.from({length: count}, (_, i) => i + 1).sort(() => Math.random() - 0.5))
                pracArr.push(...Array.from({length: count}, (_, i) => Math.floor(Math.random() * count) + 1))
            }
                    
            // Add Straight Array with iterations
            for(let i=0; i<endStraightCnt; i++){
                pracArr.push(...elementStraight)
            }
            
            return pracArr
        }
    },
}
</script>

<style>
</style>