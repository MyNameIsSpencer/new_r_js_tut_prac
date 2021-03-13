import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


// const PageOne = () => {
//     return (
//         <div>PageOne
//             {/* VV BAAADD */}
//             {/* <a href="/pagetwo">Nav to page 2</a> */}
            
//              VVVV Do this instead
//             <Link to="/pagetwo">Nav to page 2</Link>
//         </div>
//     );
// };

// const PageTwo = () => {
//     return (
//         <div>PageTwo

//             {/* VV BAAADD */}
//             {/* <a href="/">Nav to page 1</a> */}
            
//              VVVV Do this instead
//             <Link to="/pagetwo">Nav to page 2</Link>

//             <button>Clicker</button>
//         </div>
//     );
// };



const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;

