import React from 'react';
import { ListGroup, ListGroupItem, Button, Container, Row, Col } from 'reactstrap';
import RecipeModal from '../RecipeModal/RecipeModal';

class RecipeList extends React.Component {

    render() {
        return (
            <ListGroup >
                {this.props.recipes && this.props.recipes.map(recipe => (
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
                                            width: "70px",
                                            borderRadius: "3px",
                                            letterSpacing: "1.5px",
                                            backgroundColor: "#FF8802",
                                            color: "white",
                                            borderColor:"white"
                                        }}
                                        onClick={() => this.props.saveRecipe(recipe)}
                                        >
                                            {/* axios.put("/api/user/recipe/" + userId, recipe).then(
                                            ) */}
                                        {this.props.btnType}
                                      </Button>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    };
}

export default RecipeList;