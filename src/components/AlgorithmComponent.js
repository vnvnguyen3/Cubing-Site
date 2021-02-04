import React from 'react';
import {Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAlgorithm({alg}){
    return (
        <React.Fragment>
            <Media object src={alg.image} alt={alg.name} width="250"/>
                <Media body className="ml-6 mb-2">
                    <Media heading>
                        {alg.name}
                    </Media>
                    {alg.algorithm}
                </Media>
        </React.Fragment>
    );
}

function Algorithm(props){

    const algorithm = props.algs.map(alg => {
        return (
            <div className="col-md-3 m-1">
                <RenderAlgorithm alg={alg} />
            </div>
        );
    });

    return (
        <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.title}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {algorithm}
                </div>
            </div>
    );
}

export default Algorithm;