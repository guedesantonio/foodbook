import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card, Spinner, Row, Col, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import parse from "html-react-parser";

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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {loading === false ? (
        <div style={{ backgroundColor: "#FF8802", color: "white", boxShadow: "3px 3px 5px 6px rgba(0, 0, 0, 0.4)" }}>
          <ModalHeader
            toggle={toggle}>
            <p
              style={{
                fontSize: "30px",
                fontFamily: "roboto",
                textShadow: " 0 2px 2px black",
                borderColor: "#FF8802"
              }}>
              {recipeInfo.title}</p>
          </ModalHeader>
          <ModalBody   >
            <Row xs="1">
              <img src={recipeInfo.image} className="recipeImage" alt={recipeInfo.title} title={recipeInfo.title} />
            </Row>
            <Row xs="1">
              <Button outline color="warning" onClick={toggle1} style={{ marginBottom: '1rem', color: "white" ,textShadow: " 0 2px 2px black" }}>Summary</Button>
              <Collapse isOpen={isOpen}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                      {parse(recipeInfo.summary)}
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
            <Row xs="1">
              <Button outline color="warning" onClick={toggle2} style={{ marginBottom: '1rem', color: "white", textShadow: " 0 2px 2px black" }}>Ingredients</Button>
              <Collapse isOpen={isOpen2}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                      <ol>
                        {recipeInfo.extendedIngredients && recipeInfo.extendedIngredients.map(ingredient => (
                          <li key={ingredient.name}>
                            {capitalizeFirstLetter(ingredient.name) + ""} {ingredient.measures.metric.amount + ""} {ingredient.measures.metric.unitShort}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
            <Row xs="1">
              <Button outline color="warning" onClick={toggle3} style={{ marginBottom: '1rem', color: "white", textShadow: " 0 2px 2px black" }}>Instructions</Button>
              <Collapse isOpen={isOpen3}>
                <Card>
                  <CardBody>
                    <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                      <div className="summary panel" style={{ backgroundColor: "#FF8802" }}>
                        {parse(recipeInfo.instructions)}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
             className=" waves-effect waves-light hoverable accent-3"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                backgroundColor: "#FF8802",
                borderColor: "white",
                color: "white"
              }}
              outline color="warning"
              onClick={toggle}>Close</Button>
          </ModalFooter>

        </div>
      ) : (
          <div className="center" style={{ padding: "500px 0px 500px 0px" }}>
            <Spinner color="dark" />
            <br />
          L O A D I N G
          </div>
        )}
    </>
  )
}

export default RecipeModalBody;