import React from 'react';
import { Media } from 'reactstrap';

function Home(props){
    return(
        <div class="m-1">
            <h2>Welcome to my cubing site!</h2>
            <p>This website is just getting started. 
                Right now, there are pages for F2L, OLL, and PLL algorithms as well as a header with a navbar.
                I plan on adding some more pages along with more react elements.</p>
            <Media object src="/images/notation.png" alt='notation'/>
        </div>
    );
}

export default Home;