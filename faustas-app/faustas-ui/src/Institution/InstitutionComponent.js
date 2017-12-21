import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export class InstitutionComponent extends React.Component {
    

        render() {
            return (
                <div className="col-xs-12 col-sm-4 text-center">
                    <div className="thumbnail">
                        <h3>{this.props.title}</h3>
                        <h4>{this.props.city}</h4>
                        <h4>{this.props.picture}</h4>
                        <p>{this.props.category} </p>
                    </div>
                </div>
            );
        }

    };