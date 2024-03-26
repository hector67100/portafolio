import { Container } from "@mui/material";
import React from "react";
import Modales from "./Modales";

const Principal = React.FC = () =>
{   var modal =[
    ["Randalls","2022","React","images/Randalls.png"],
    ["Quantum","2021","Vue/Sass/Laravel","images/quantum.png"],
    ["Brennan","2021","Joomla/Sass","images/Brennan.png"],
    ["Los Angeles Defense Attorney","2021","Joomla/Sass","images/LosAngeles.png"],
    ["Insurance Denial Attorney","2021","Joomla/Sass","images/StopDenial.png"],
    ["NJSMG","2021","Joomla/Sass","images/NJSMG.png"]
    ];    
    return (
        <Container maxWidth="xl">
            <h3 className="text-center">Sitios en los que he trabajado</h3>
            <Modales modales={modal}/>
        </Container>
    );
}

export default Principal;