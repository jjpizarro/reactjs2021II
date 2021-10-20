import React,{useState} from 'react'

export default function StudenForm(props){
    const estadoIncialForm = {
        nombre:'',
        programa:'',
        semestre:''
    };
    const [estadoForm, cambiarEstadoForm] = useState(estadoIncialForm);

    const gestionarCamposForm = event => {
        //const nameInput = event.target.name;
        //const valueInput = event.target.velue;
        const {name,value} = event.target;
        cambiarEstadoForm({...estadoForm,[name]:value});
    }

    const onSubmitForm = ev =>{
        ev.preventDefault();
        console.log(estadoForm);
        props.agregar(estadoForm);

        cambiarEstadoForm(estadoIncialForm);

    }

    return (
        <form onSubmit={onSubmitForm}>
           <div className="mb-3">
                <label htmlFor="nameStudent" className="form-label">Nombre</label>
                <input type="text" name="nombre" className="form-control" id="nameStudent" value={estadoForm.name} onChange={gestionarCamposForm}/>
            </div>
            <div className="mb-3">
                <label htmlFor="program" className="form-label">Programa</label>
                <input type="text" name="programa" className="form-control" id="program" value={estadoForm.program}  onChange={gestionarCamposForm}/>
            </div>
            <div className="mb-3">
                <label htmlFor="grade" className="form-label">Grado</label>
                <input type="text" name="semestre" className="form-control" id="grade" value={estadoForm.grade} onChange={gestionarCamposForm} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Agregar</button>
            </div>
        </form>
    );
}