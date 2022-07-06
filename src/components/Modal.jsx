import React, {useState} from 'react';

import Button from '@atlaskit/button/standard-button';
import ModalDialog, {ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalTransition,} from '@atlaskit/modal-dialog';

import Form from '@atlaskit/form';

const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <>
            <Button onClick={open}>{props.modalButton}</Button>

            <ModalTransition>
                {isOpen && (
                    <ModalDialog onClose={close}>
                        <Form
                            onSubmit={props.onSubmit}
                        >
                            {({ formProps }) => (
                                <form id="form-with-id" {...formProps}>
                                    <ModalHeader>
                                        <ModalTitle>{props.modalTitle}</ModalTitle>
                                    </ModalHeader>

                                    <ModalBody>
                                        {props.children}

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button
                                            type="submit"
                                            form="form-with-id"
                                            appearance="primary"
                                        >
                                            {props.buttonValue}
                                        </Button>
                                    </ModalFooter>
                                </form>
                            )}
                        </Form>
                    </ModalDialog>
                )}
            </ModalTransition>
        </>
    );
};

export default Modal;