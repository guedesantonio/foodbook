import React from 'react';
import { Card, Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import RecipeService from "../../services/RecipeService";
import RecipeList from "../recipeList/recipeList"


class SearchList extends React.Component {

  state = {
    inputRecipeName: '',
    recipeList: []
  }
  

  inputRecipeNameChange = (e)=> {
    this.setState({ inputRecipeName: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const recipeObject = await RecipeService.getRecipeList(this.state.inputRecipeName);
    console.log(recipeObject.results);
    this.setState({ inputRecipeName: '',recipeList: recipeObject.results});
  }
  

  render(){
    return(
      <Card style={{ backgroundColor: "#3C5A98", color: "white" }}>
        <Container className="themed-container" fluid={true}>
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
        </Container>
            <RecipeList recipes={this.state.recipeList}/>
      </Card>
    );
  };
}

export default SearchList;