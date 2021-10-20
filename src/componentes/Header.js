import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <Row> 
            <Col className="py5 text-center border">  
                <h1>Gestion estudiantes</h1>
                <span><Link to="/">Inicio</Link>/ <Link to='/crear-estudiante'>Crear</Link> / Consultar/Actualizar/Eliminar</span>
            </Col>
        </Row>
    );
}

export default Header;