import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import FormRowInput from "./formRowInput";

const LinkModal = (props: any) => {
    const formRef = useRef(null);
    const { show, onHide, isEdit, onChange, link, validated, onSubmit, errorMsg } = props;

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered={true} //Centra el modal verticalmente en la pantalla
            backdrop="static" //Si se hace click fuera del modal este no se cerrara
            keyboard={false}  //Si se presiona la tecla ESC tampoco se cierra
        >
            <Modal.Header closeButton>
                <Modal.Title>Link {link.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className={"form"} noValidate validated={validated} ref={formRef}>
                    
                    <FormRowInput
                        label={'Likes'}
                        type={'number'}
                        required={true}
                        placeholder={'Puntos del node'}
                        property={'likes'}
                        value={link.likes}
                        handleChange={onChange}
                    />

                    {errorMsg !== '' &&
                        <Form.Group className="alert-danger">
                            {errorMsg}
                        </Form.Group>
                    }
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={onHide} variant="danger">Cancelar</Button>
                <Button onClick={(e)=> onSubmit(e,formRef.current, isEdit)} variant="success">Actualizar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LinkModal;