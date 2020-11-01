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
          type: 'x',
          practise: 'y',
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
                    const elementStraight = Array.from({length: this.count}, (_, i) => i + 1)
                    const elementReverse = Array.from({length: this.count}, (_, i) => this.count - i)
                    console.log(elementStraight)
                    console.log(Array.from({length: this.count}, (_, i) => i + 1).sort(() => Math.random() - 0.5))
                    console.log(elementStraight)

                    // Add Straight Elements 10 times
                    for(let i=0; i<5; i++){
                        this.practiseArray.push(...elementStraight)
                    }

                    // Add Reverse Elemetns 5 times
                    for(let i=0; i<3; i++){
                        this.practiseArray.push(...elementReverse)
                    }

                    // Add Jumbled Elements 10 times
                    for(let i=0; i<10; i++){
                        this.practiseArray.push(...Array.from({length: this.count}, (_, i) => i + 1).sort(() => Math.random() - 0.5))
                    }
                    
                    // Add Straight Element 3 times
                    for(let i=0; i<3; i++){
                        this.practiseArray.push(...elementStraight)
                    }
                    console.log(this.practiseArray)
                    // console.log(type(typeof this.practiseArray))
                    break;
                case 'revise':
                    break;
                case 'practise':
                    break;

          }
      },
      clearPractise(){
          console.log('Reset Practise')
      },
      nextOption(){
          console.log('Next Option')
          this.practiseIndex += 1
      }
  },

}
</script>

<style>
</style>