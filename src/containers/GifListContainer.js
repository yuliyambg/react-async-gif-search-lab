import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

state = {
    gifs: []
}

   fetchGIFs = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
            })
    }

    render(){
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs()}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
    this.fetchGIFs()
    }
}

export default GifListContainer