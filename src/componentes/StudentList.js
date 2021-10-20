import React,{useState} from 'react'
import StudentItem from './StudentItem';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentForm from '../componentes/StudenForm';

const StudentList = ()=> {
    const studentsInitial = [
        {id:1,nombre:'Alvalor',programa:'Ing de Sistemas',semestre:7},
        {id:2,nombre:'Carlos',programa:'Ing de Industrial',semestre:5},
        {id:3,nombre:'Camilo',programa:'Ing de Sistemas',semestre:5},
        {id:4,nombre:'Esteban',programa:'Ing de Elctrónica',semestre:2},
        {id:5,nombre:'Angie',programa:'Ing de Sistemas',semestre:3},
        {id:6,nombre:'Luz',programa:'Ing de Sistemas',semestre:5}
    ]
    const [students, setStudents] = useState(studentsInitial);

    const alEnviarForm = (studentFromForm)=>{
        const idS = students.length + 1;
        const student = {...studentFromForm, id:idS};
        setStudents([...students,student]);
    }
    return (
        <>
            <Row>
                <StudentForm agregar={alEnviarForm}/>
            </Row>
            <Row className="border">
                <Col>
                { 
                    students.map(s => (
                        
                        <StudentItem key={s.id} student={s} />
                        
                    ))
                }
                </Col>
                
            </Row>
        </>
    );
}

export default StudentList;