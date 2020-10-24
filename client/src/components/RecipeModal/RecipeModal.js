/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css";
import RecipeService from "../../services/RecipeService";
import RecipeModalBody from '../recipeModalBody/RecipeModalBody';

const RecipeModal = (props) => {
    const {
        buttonLabel,
        ID,
    } = props;

    const [modal, setModal] = useState(false);



    const toggle = () => setModal(!modal);

    return (
        <div >
            <Button
                style={{
                    width: "70px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    backgroundColor: "#3C5A98",
                    color: "white"
                }}
                onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} modalClassName="modal-dialog" style={{ maxHeight: "100vh", overflowY: "auto" }}>
                {modal && <ModalContent
                    ID={ID}
                    toggle={toggle}
                />}
            </Modal>
        </div>
    );
}

export default RecipeModal;


const ModalContent = (props) => {

    const {
        ID,
        toggle
    } = props;

    const [recipeInfo, setRecipeInfo] = useState([]);

    useEffect( () => {
        RecipeService.getRecipe(ID).then( (recipeInfo) => {
            if (recipeInfo) {
                setRecipeInfo(recipeInfo);
            }
        }
        );
    }, []);


    console.log(recipeInfo);
    return (

        <div>
               <RecipeModalBody recipeInfo={recipeInfo} toggle={toggle}/>
        </div>
    );
}

