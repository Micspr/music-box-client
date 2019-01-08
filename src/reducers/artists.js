import {ADD_ARTIST, REMOVE_ARTIST, GET_ARTISTS} from '../actions/artists'

const initialState = [
  { id: 1, name: 'Drake', genre: 'hip-hop' },
  { id: 2, name: 'Fugees', genre: 'hip-hop' },
  { id: 3, name: 'A Tribe Called Quest', genre: 'hip-hop' }
]

function artists(state = initialState, {type, payload}) {
  switch(type) {
    case GET_ARTISTS:
      return payload
    case ADD_ARTIST:
      return [...state, payload]
    case REMOVE_ARTIST:
      return state.filter(artist => artist.id !== payload)
    default:
      return state
  }
}

export default artists