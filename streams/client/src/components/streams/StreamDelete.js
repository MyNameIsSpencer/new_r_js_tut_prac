import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { render } from '@testing-library/react';


// const StreamDelete = () => {
class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteStream(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete the stream with title: ${
            this.props.stream.title
        }?`;
    }

    render() {
        return (
            <Modal 
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}


//     const actions = (
//         <div>
//             <button className="ui button negative">Delete</button>
//             <button className="ui button negative">Cancel</button>
//         </div>
//     );

//     return (
//         <div>
//             StreamDelete
//             <Modal 
//                 title="Delete Stream"
//                 content="Are you sure you want to delete this stream?"
//                 actions={actions}
//             />
//         </div>
//     );
// };

// export default StreamDelete;


const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect( mapStateToProps, { fetchStream, deleteStream } )(StreamDelete);