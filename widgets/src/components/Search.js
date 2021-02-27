// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);


    useEffect(() => {
        const search = async () => {  // << Option 1, must make another func, search,
                                      //instead of putting async right in useEffect, cuz that's how hooks work
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                },
            });
            if (data.query != null) {
                setResults(data.query.search);
            }
        };
        search();
    }, [debouncedTerm]);


    // console.log('I RUN WITH EVERY RENDER');
    // console.warn('RESULTSS')
    // console.log(results)
    // useEffect(() => {
//         const search = async () => {  // << Option 1, must make another func, search,
//             //instead of putting async right in useEffect, cuz that's how hooks work
            // const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            // params: {
            // action: 'query',
            // list: 'search',
            // origin: '*',
            // format: 'json',
            // srsearch: debouncedTerm
            // },
            // });
            // setResults(data.query.search);
            // };
            // search();
   
        // if (term && !results.length) {
        //     search();
        // } else {
        //     const timeoutId = setTimeout(() => {
        //         if (term) {
        //             search();
        //         }
        //     }, 800);
    
        //     return () => {
        //         clearTimeout(timeoutId);
        //     };
        // }



        // console.log('INitial or term was changed');

        // return () => {
        //     console.log('CLEANUP');
        // };

    // useEffect(await () => {  // <<<< CAnnot do


        // (async () => {   // <<< Option 2
        //     await axios.get('asdlfksdfljka');
        // })();

        // axios.get('asdlfksdflk')  // << Option 3
        //     .then((response) => {
        //         console.log('asdf');
        //     });
    
        // console.log('I ONLY RUN ONCE');
        // console.log('Every change of term');
    // }, []);
    // }, [term, results.length]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.widipedia.org?curid=${result.pageid}`}
                    >
                        GO GO GO
                    </a>
                </div>
                <div className="content">
                    <div className="header"> {result.title} </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    });


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
    // return <h1> Searcher</h1>;
}

export default Search;
