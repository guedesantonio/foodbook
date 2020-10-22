import React from 'react';
import { ListGroup, ListGroupItem, Button, Container, Row, Col } from 'reactstrap';
import RecipeModal from '../modal/Modal';

class RecipeList extends React.Component {

    render() {
        const recipes = this.props.recipes;
        return (
            <ListGroup >
                {recipes && recipes.map(recipe => (
                    <ListGroupItem
                        key={recipe.id}
                        style={{ backgroundColor: "#3C5A98" }}
                    >
                        <Container className="themed-container" fluid={true}>
                            <Row xs="3">
                                <Col>
                                    <img
                                        style={{ maxHeight: "150px", maxWidth: "150px" }}
                                        src={recipe.image}
                                        className="card-img"
                                        alt={recipe.title}
                                    />

                                </Col>
                                <Col>
                                    <h4>{recipe.title}</h4>
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
                                            backgroundColor: "#3C5A98",
                                            color: "white"
                                        }}
                                        >
                                        Save
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