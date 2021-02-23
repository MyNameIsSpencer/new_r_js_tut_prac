import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };


    // async onSearchSubmit(term) {
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
        console.log(this.state.images)
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
                {/* Found: {this.state.images.length} images */}
            </div>
        )
    }
};

export default App;



    // onSearchSubmit(term) {
    //     console.log(term);

    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID 0JLHj7h7HyNiJd4vnfSeC6_jcX3jXT220DvBSsYVloE'
    //         }
    //     }).then(res => {
    //         console.log(res.data.results);
    //     });
    // }
