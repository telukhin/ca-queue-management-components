import React from 'react';

import Textfield from '@atlaskit/textfield';
import {Field} from "@atlaskit/form";

function TextFieldElement(props) {
    return (
        <>
            <Field aria-required={true} name={props.name} label={props.label}
                   defaultValue=""
                   isRequired>
                {({fieldProps}) => <Textfield {...fieldProps} />}
            </Field>
        </>
    );
}

export default TextFieldElement;