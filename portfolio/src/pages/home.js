import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const home = () => {
    const { loading, data} = useQuery(QUERY_MATCHUPS {

    });
    const matchupList = data?.matchups || [];
    return(
        <>
            <nav>

            </nav>
            {/* nav bar to contain links to other pages. *flexed properly */}

            <div className='hero'>

            </div>
            {/* hero containg short description of who i am with nice design */}


            

            <footer>
            
            </footer>
            {/* adding footer which will contain technolgies used.  */}

        </>
    )
};

export default home;
