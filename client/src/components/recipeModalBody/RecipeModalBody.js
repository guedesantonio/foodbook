import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card, Spinner, Row, Col, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const RecipeModalBody = ({ recipeInfo, toggle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);

  return (
    <>
      {loading === false ? (
        <div style={{ backgroundColor: "#FC8102", color: "white" }}>
          <ModalHeader toggle={toggle}><h1>{recipeInfo.title}</h1></ModalHeader>
          <ModalBody   >
            <Row xs="1">
              <img src={recipeInfo.image} className="recipeImage" alt="Pasta Vegetable Soup" title="Pasta Vegetable Soup" />
            </Row>
            <Row xs="1">
              <Button color="success" onClick={toggle1} style={{ marginBottom: '1rem' }}>Summary</Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FC8102" }}>
                      {recipeInfo.summary}
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
            <Row xs="1">
              <Button color="success" onClick={toggle2} style={{ marginBottom: '1rem' }}>Ingredients</Button>
              <Collapse isOpen={isOpen2}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FC8102" }}>
                      <ol>
                        {recipeInfo.extendedIngredients && recipeInfo.extendedIngredients.map(ingredient => (
                          <li key={ingredient.name}>
                            {ingredient.name + ""} {ingredient.measures.metric.amount + ""} {ingredient.measures.metric.unitShort}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
            <Row xs="1">
              <Button color="success" onClick={toggle3} style={{ marginBottom: '1rem' }}>Instructions</Button>
              <Collapse isOpen={isOpen3}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FC8102" }}>
                      <div className="summary panel" style={{ backgroundColor: "rgba(128, 0, 128, 0.11)" }}>
                        {recipeInfo.instructions}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" >Save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>

        </div>
      ) : (
          <div className="center" style={{ padding: "500px 0px 500px 0px" }}>
            <Spinner color="dark" />
        L O A D I N G
          </div>
        )}
    </>
  )
}

export default RecipeModalBody;