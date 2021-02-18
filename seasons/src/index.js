import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>
// };


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

    }

    // VVV alternate way of initializing state, babel will build state for you and init state
    // state = { late: null, errorMessage: '' };

    componentDidMount() {
        console.log('Did Mounter')
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position)
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message })
                console.log(err)
            }
        );

    }


    // componentDidUpdate() {
    //     console.log('UPdater')
    // }

    // componentWillUnmount() {
    //     console.log('Unmounter')
    // }


    // Helper function VVV
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
            // return <div>Latitude: {this.state.lat }</div>
        }

        return <Spinner message="Please accept location request"/>
    }

    render() {
        return (
            // VV This should include a red border matter which of the renderContent gets returned
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         <br/>
        //         Error: {this.state.errorMessage}
        //     </div>
        // );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));