import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../css/misestilos.css'
import Form from 'react-bootstrap/Form'
const StudentItem = (props)=>{
    const {nombre, programa,semestre} = props.student;
    const controlarClick = (ev)=>{
        ev.preventDefault();
        console.log('Se invocó la función al dar click');
    }

    return (
        <div className="item">
            <Row>
                <Col md={1} sm={1}>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="avatar"/>
                </Col>
                <Col md={8} sm={8}>
                    <h5>{nombre}</h5>
                    <p>{programa}</p>
                    <p className="text-muted">{semestre}</p>
                </Col>
                <Col md={3} ms={3}>
                    <Form>
                        <Button variant="primary" size="sm" onClick={ controlarClick}>Ver detalles </Button>
                    </Form>
                </Col>

                
            </Row>
        </div>
    );
}

export default StudentItem;