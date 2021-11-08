import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const FormRowInput = (props: any) => {
    const { label, type, required, placeholder, property, value, handleChange} = props;
    return (
        <Form.Group controlId={property}>
            <Row>
                <Col className={'col-md-3'}>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col className={'col-md-9'}>
                    <Form.Control
                        formNoValidate
                        type={type}
                        required={required}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => handleChange(property,e.target.value)}
                    />
                    { required && (
                        <Form.Control.Feedback type={"invalid"}>
                            {label} es requerido
                        </Form.Control.Feedback>
                    )}
                </Col>
            </Row>
        </Form.Group>
    )
}

export default FormRowInput;
