import { Container } from "@mui/material";
import React, {useState, useRef} from "react";
import Modales from "./Modales";

const Principal = () =>
{   
    const proyectos = [
    ["Randalls","2022","React","images/Randalls.png"],
    ["Quantum","2021","Vue/Sass/Laravel","images/quantum.png"],
    ["Brennan","2021","Joomla/Sass","images/Brennan.png"],
    ["Los Angeles Defense Attorney","2021","Joomla/Sass","images/LosAngeles.png"],
    ["Insurance Denial Attorney","2021","Joomla/Sass","images/StopDenial.png"],
    ["NJSMG","2021","Joomla/Sass","images/NJSMG.png"]
    ];

    const [proyect, setProyect] = useState([
    ["Randalls","2022","React","images/Randalls.png"],
    ["Quantum","2021","Vue/Sass/Laravel","images/quantum.png"],
    ["Brennan","2021","Joomla/Sass","images/Brennan.png"],
    ["Los Angeles Defense Attorney","2021","Joomla/Sass","images/LosAngeles.png"],
    ["Insurance Denial Attorney","2021","Joomla/Sass","images/StopDenial.png"],
    ["NJSMG","2021","Joomla/Sass","images/NJSMG.png"]
    ]); 

    const toCapitalize = (texto) =>
    { 
        return texto.toLowerCase().replace(/^.|\s\S/g, function(a) { return a.toUpperCase(); });
    }

    const buscarTecnologia = event => {

       let busqueda = proyectos.filter((proyectos) => buscar(proyectos,toCapitalize(event.target.value)))
       if(busqueda)
       {
        setProyect(busqueda);
       } 
       else
       {
        setProyect(proyectos);
       }
    } 

    const buscar = (proyectos,val) =>
    {
        if (proyectos[2].includes(val))
        {
            return true;
        }
    } 

    return (
        <Container maxWidth="xl">
            <h3 className="text-center">Sitios en los que he trabajado</h3>
            <input 
            type="text" 
            placeholder="Buscar Tecnologia" 
            onChange={buscarTecnologia}
            />
            <Modales modales={proyect}/>
        </Container>
    );
}

export default Principal;