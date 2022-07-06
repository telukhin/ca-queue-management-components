import React from 'react';

import Button from '@atlaskit/button';

function ButtonElement(props) {
    return <Button
        appearance="primary"
    >
        {props.value}
    </Button>
}

export default ButtonElement;