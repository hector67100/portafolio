import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BModal = ({modal}) =>
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
                <>
                    <a href="#" onClick={handleShow}>
                        <h2>{modal[0]}</h2>
                        <h2>{modal[1]}</h2>
                            <div className="content">
                                <p>Mostrar Imagen</p>
                                <p>{modal[2]}</p>
                            </div>
                    </a>
                    {
                    show ?
                    <>
                        <div className="darkBG" onClick={handleClose} />
                            <div className="centered">
                                <div className="modal">
                                    <img src={modal[3]}/>
                                </div>
                            </div> 
                    </>
                    :
                    null
                    }
                   
                </>
    );
}

export default BModal;