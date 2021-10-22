<template>
  <section>
      <div class="characters">
        <div class="characters_item" v-for="character in characters" :key="character.id">
            <CardCharacter :character="character"/>
        </div>

      </div>
  </section>
</template>

<script>
import { onMounted,computed } from 'vue'
import {useStore} from 'vuex'
import CardCharacter from '@/components/CardCharacter.vue'

export default {
    components:{
        CardCharacter
    },
    setup(){
        const store = useStore() //para acceder al store y alas actions

        const characters = computed(()=>{
            return store.state.charactersFilter
        }) //propiedad computada

        onMounted(()=>{
            store.dispatch('getCharacters') //para acceder a las actions
        })

        return{characters}
    }
}
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>