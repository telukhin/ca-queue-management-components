import React from 'react';
import Select from '@atlaskit/select';
import {Field} from "@atlaskit/form";


function SearchableDropDown(props) {
    return (
            <>
                <Field
                    aria-required={true}
                    label={props.label}
                    name={props.name}
                    id={props.id}
                    isRequired
                >
                    {({fieldProps: {id}}) => (
                        <Select
                            id={`${id}-select`}
                            isSearchable={props.isSearchable}
                            options={props.options}
                        />
                    )}
                </Field>
            </>
        );
}

export default SearchableDropDown;