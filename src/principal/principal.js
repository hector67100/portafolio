import { Container } from "@mui/material";
import React from "react";
import Modales from "./Modales";

const Principal = React.FC = () =>
{   var modal =[["Randalls","images/Randalls.png"],["Quantum","images/quantum.png"],["Brennan","images/Brennan.png"],["Los Angeles Defense Attorney","images/LosAngeles.png"],["Insurance Denial Attorney","images/StopDenial.png"],["NJSMG","images/NJSMG.png"]];    
    return (
        <Container maxWidth="xl">
            <Modales modal={modal}/>
        </Container>
    );
}

export default Principal;