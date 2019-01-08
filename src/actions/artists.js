import axios from 'axios'
export const ADD_ARTIST = 'ADD_ARTIST'
export const REMOVE_ARTIST = 'REMOVE_ARTIST'
export const GET_ARTISTS = 'GET_ARTISTS'

export const addArtist = (artistObj) => {
  return (dispatch) => {
    axios.post(`http://localhost:5000/artists`, artistObj)
      .then(result => dispatch({type: ADD_ARTIST, payload: result.data}))
      .catch(err => console.log(err))
  }
}

export const removeArtist = (id) => {
  return (dispatch) => {
      axios.delete(`http://localhost:5000/artists/${id}`)
        .then(result => dispatch({type: REMOVE_ARTIST, payload: id}))
        .catch(err => console.log(err))
  }
}

export const getArtists = () => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/artists`)
    .then(result => dispatch({type: GET_ARTISTS, payload: result.data}))
    .catch(err => console.log(err))
  }
}