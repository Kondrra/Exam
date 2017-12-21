import React from 'react';
import {InstitutionComponent} from "./InstitutionComponent";
export var InstitutionListComponent = (props) => {
    const Insti = props.institutions.map((institution, index) => {
        var InstiComponent = <InstitutionComponent
            key={index}
            id={institution.id}
            title={institution.title}
            city={institution.city}
            picture={institution.picture}
            category={institution.category}
            history={props.history}
        />;
        return (
            institutionComponent
        );
    });

    return (
        <div className="row">
            {Insti}
        </div>
    );
};