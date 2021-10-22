import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[], //todos los personajes en general
    charactersFilter:[] //donde hacemos consultas y filtros para no seguir haciendo peticiones al api
  },
  mutations: { //modificar state
    setCharacters(state,payload){//state:accedemos a variables del state y payload: data que mandamos
      state.characters = payload
    },
    setCharactersFilter(state,payload){
      state.charactersFilter = payload
    }
  },
  actions: { //aqui se hacen las funciones que permiten a las mutaciones cambiar el state
    async  getCharacters({commit}){ //nos permite atraer a todos los personajes del api
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character') //comos sera get no es necesario especificar method
      
       const data = await response.json()
        console.log(data)

        commit('setCharacters',data.results) //results es estructura del api
        commit('setCharactersFilter',data.results)
      } catch (error) {
        console.log(error)
      }

    },
    FilterByStatus({commit,state},status){
      const results =state.characters.filter((character)=>{ //recorre los personajes del array
        return character.status.includes(status) //regresa todos los personajes que queramos
      })
      commit('setCharactersFilter',results)
    },
    filterByName({commit,state},name){
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character)=>{
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character

        }
      })
      commit('setCharactersFilter',results)
    }
  },
  modules: {
  }
})
