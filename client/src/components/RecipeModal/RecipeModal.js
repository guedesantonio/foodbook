/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'reactstrap';
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
            className="btn btn-large waves-effect waves-light hoverable accent-3"
                style={{
                    width: "95px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    backgroundColor: "#FF8802",
                    color: "white",
                    borderColor: "white",
                    margin: "5px"
                }}
                onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal 
            isOpen={modal} 
            toggle={toggle} 
            modalClassName="modal-dialog" 
            style={{ maxHeight: "100vh", overflowY: "auto" }}
            container= "div.App"
            >
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

