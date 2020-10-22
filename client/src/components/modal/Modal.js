/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap';
import "./modal.css";
import RecipeService from "../../services/RecipeService";

const RecipeModal = (props) => {
    const {
        buttonLabel,
        title,
        image,
        recipe,
        ID,
    } = props;

    const [modal, setModal] = useState(false);



    const toggle = () => setModal(!modal);

    return (
        <div>
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
            <Modal isOpen={modal} toggle={toggle} modalClassName="modal-dialog"  >
                {modal && <ModalContent
                    title={title}
                    image={image}
                    recipe={recipe}
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
        title,
        image,
        recipe,
        ID,
        toggle
    } = props;

    const [recipeInfo, setRecipeInfo] = useState(null);

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
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                <img
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                    src={image}
                    className="card-img"
                    alt={title}
                />
                {recipe}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </div>
    );
}

