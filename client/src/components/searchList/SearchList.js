import React, { useRef } from 'react';
import { Card, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import RecipeService from "../../services/RecipeService";

class SearchList extends React.Component {

  state = {
    inputRecipeName: ''
  }

  inputRecipeNameChange = (e)=> {
    this.setState({ inputRecipeName: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const recipeList = await RecipeService.getRecipeList(this.state.inputRecipeName);
    console.log(recipeList);
  }

  // const recipeSearchInput = useRef();
  // const searchRecipes = async () => {
    // console.log(recipeSearchInput.current);
    // const recipeList = await RecipeService.getRecipeList(recipeSearchInput.current.value);
    // console.log(recipeList);
  

  render(){
    return(
      <Card style={{ backgroundColor: "#3C5A98", color: "white" }}>
        <div className="row">
          <div className="col s12 ">
            <Form
              style={{ padding: "20px" }}
              onSubmit={ this.handleSubmit }
            >
              <FormGroup >
                <Label for="exampleSearch">Search Recipe</Label>
                <Input
                  onChange={ this.inputRecipeNameChange }
                  style={{ color: "white" }}
                  type="search"
                  name="search"
                  placeholder="Type Recipe Name Here" />
              </FormGroup>
              <Button
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  backgroundColor: "#3C5A98",
                  borderColor: "white",
                  color: "white"
                }}>Search</Button>
            </Form>
            <ListGroup >
              <ListGroupItem style={{ backgroundColor: "#3C5A98", color: "white" }}>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="https://spoonacular.com/recipeImages/654812-312x231.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Pasta with Calamaris</h5>
                        <Button style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          backgroundColor: "#3C5A98",
                          color: "white"
                        }}>See recipe</Button>

                        <Button style={{
                          width: "140px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          backgroundColor: "#3C5A98",
                          color: "white"
                        }}>Save Recipe</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </Card>
    );
  };
}

export default SearchList;