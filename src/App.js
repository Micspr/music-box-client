import React, { Component } from 'react'
import Header from './components/Header'
import ArtistList from './components/ArtistList'
import ArtistForm from './components/ArtistForm'

class App extends Component {
  constructor () {
    super()
  }

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col">
              <h2 className="h4 text-center">All Artists</h2>
              <ArtistList />
            </div>
            <div className="col-4">
              <h2 className="h4 text-center">Add a new Artist</h2>
              <ArtistForm />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
