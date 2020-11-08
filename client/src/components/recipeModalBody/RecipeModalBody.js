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
        <div style={{ backgroundColor: "#FF8802", color: "white" }}>
          <ModalHeader toggle={toggle}><p style={{fontSize:"30px", fontFamily:"roboto"}}>{recipeInfo.title}</p></ModalHeader>
          <ModalBody   >
            <Row xs="1">
              <img src={recipeInfo.image} className="recipeImage" alt={recipeInfo.title} title={recipeInfo.title} />
            </Row>
            <Row xs="1">
              <Button outline color="warning" onClick={toggle1} style={{ marginBottom: '1rem', color: "white" }}>Summary</Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                      {recipeInfo.summary}
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
            <Row xs="1">
              <Button outline color="warning" onClick={toggle2} style={{ marginBottom: '1rem', color: "white" }}>Ingredients</Button>
              <Collapse isOpen={isOpen2}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
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
              <Button outline color="warning" onClick={toggle3} style={{ marginBottom: '1rem', color: "white" }}>Instructions</Button>
              <Collapse isOpen={isOpen3}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                      <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                        {recipeInfo.instructions}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button outline color="warning" onClick={toggle}>Close</Button>
          </ModalFooter>

        </div>
      ) : (
          <div className="center" style={{ padding: "500px 0px 500px 0px" }}>
            <Spinner color="dark" />
            <br/>
          L O A D I N G
          </div>
        )}
    </>
  )
}

export default RecipeModalBody;