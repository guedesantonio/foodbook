import React, { useState , useEffect } from 'react';
import { ListGroup, ListGroupItem, Button, Container, Row, Col } from 'reactstrap';
import RecipeModal from '../RecipeModal/RecipeModal';
import { useAlert } from 'react-alert'

const RecipeList = (props) => {

    const [buttonState, setButtonState] = useState("");
    // const disableButton = () => {
    //    setButtonState("d-none")
    //   }
    const alert = useAlert();
    return (
        <ListGroup >
            {props.recipes && props.recipes.map(recipe => (
                <ListGroupItem
                    key={recipe.id}
                    style={{ backgroundColor: "#FF8802" }}
                >
                    <Container className="themed-container" fluid={true}>
                        <Row xs="3">
                            <Col>
                                <img
                                    style={{ maxHeight: "170px", maxWidth: "170px" }}
                                    src={recipe.image}
                                    className="card-img"
                                    alt={recipe.title}
                                />

                            </Col>
                            <Col>
                                <p>{recipe.title}</p>
                            </Col>
                            <Col>
                                <RecipeModal
                                buttonLabel="View"
                                title=""
                                image=""
                                recipe=""
                                ID={recipe.id}
                                >
                                View
                                </RecipeModal>
                                <Button
                                    style={{
                                        width: "95px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        backgroundColor: "#FF8802",
                                        color: "white",
                                        borderColor:"white"
                                    }}
                                    onClick={() =>  {props.SaveOrDeleteRecipe(recipe); 
                                        alert.show(<div style={{ color: '#FF8802' }}>Recipe {props.btnType}d!</div>
                                    )}}
                                    >
                                    {props.btnType}
                                    </Button>
                            </Col>
                        </Row>
                    </Container>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default RecipeList;