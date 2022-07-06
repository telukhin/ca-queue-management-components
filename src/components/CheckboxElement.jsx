import React from 'react';

import {Checkbox} from '@atlaskit/checkbox';
import {Field} from "@atlaskit/form";

const CheckboxElement = (props) => {
    return (
        <div>
            <Field name={props.name} label={props.label}>
                {({fieldProps: {value}}) => (
                    <Checkbox
                        label={props.value}
                        isChecked={!!value}
                    />
                )}
            </Field>
        </div>
    );
};

export default CheckboxElement;