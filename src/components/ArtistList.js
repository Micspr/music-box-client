import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getArtists, removeArtist} from '../actions/artists'


class ArtistList extends Component { 
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getArtists())
  }

  render() {
    const list = this.props.artists.map((artist, i) => {
      return <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={ i }>
          { artist.name }
          <section>
            <span className="badge badge-primary badge-pill">{ artist.genre }</span>
            <button className="badge badge-danger badge-pill text-white ml-2" onClick={() => this.props.dispatch(removeArtist(artist.id))}>Remove</button>
          </section>
        </li>
    })
    return <ul className="list-group">{ list }</ul>
}
}

const mapStateToProps = (state) => ({artists: state.artists})

const mapDispatchToProps = (dispatch) => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
