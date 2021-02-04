import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Algorithm from './AlgorithmComponent';
import Feedback from './FeedbackComponent';
import {PLLs} from '../shared/pll';
import {OLLs} from '../shared/oll';
import {F2Ls} from '../shared/f2l';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            plls: PLLs,
            olls: OLLs,
            f2ls: F2Ls
        };
    }

    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" render={()=> <Home />} />
                    <Route path="/pll" render={()=> <Algorithm 
                        algs={this.state.plls} 
                        title={"PLL"}
                        description={"Permutation of the Last Layer. Moving the Last Layer pieces in the right spot."}
                    />} />
                    <Route path="/oll" render={()=> <Algorithm 
                        algs={this.state.olls} 
                        title={"OLL"}
                        description={"Orientation of the Last Layer. Making sure the top side is all the same color."}
                    />} />
                    <Route path="/f2l" render={()=> <Algorithm 
                        algs={this.state.f2ls} 
                        title={"F2L"}
                        description={"First two Layers. Done after creating a cross on the first layer."}
                    />} />
                    <Route path="/feedback" render={()=> <Feedback />} />
                </Switch>
            </div>
        );
    }
}

export default Main;