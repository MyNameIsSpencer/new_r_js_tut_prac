import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        // VV One solution
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    state = { term: '' };


    // onInputChange(event) {
    //     console.log(event.target.value);

    // }

    // logOutInput(event) {
    //     console.log(event)
    // }


    // onFormSubmit(event) {
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }


    render() {
        return (
            <div className="ui segment">
                {/* <form onSubmit={this.onFormSubmit} className="ui form"> */}
                <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> 
                {/* ^^ Another solution to undefined error, put error func right in there */}
                    <div className="field">
                        <label>IMage Searcher</label>
                        {/* <input type="text" onChange={this.onInputChange} onClick={this.logOutInput}/> */}
                        {/* <input type="text" onChange={e => console.log(e.target.value)} onClick={this.logOutInput}/> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
