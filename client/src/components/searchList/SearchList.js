import React from 'react';
import { Card, Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';
import RecipeService from "../../services/RecipeService";
import RecipeList from "../recipeList/recipeList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";


class SearchList extends React.Component {

  state = {
    inputRecipeName: '',
    recipeList: []
  }
  
  userId = this.props.auth.user.id
  onRecipeSave = this.props.onRecipeSave

  inputRecipeNameChange = (e)=> {
    this.setState({ inputRecipeName: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const recipeObject = await RecipeService.getRecipeList(this.state.inputRecipeName);
    console.log(recipeObject.results);
    this.setState({ inputRecipeName: '',recipeList: recipeObject.results});
  }
  
  saveRecipe = (recipe) => {
    const onRecipeSave = this.onRecipeSave
    axios.put("/api/users/recipe/" + this.userId, recipe).then(() => {
      console.log("Recipe inserted")
      onRecipeSave()
    })
  }

  render(){
    return(
      <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
        <Container className="themed-container" fluid={true}>
          <Form
                style={{ padding: "20px",color:"white" }}
                onSubmit={ this.handleSubmit }
              >
            <FormGroup  style={{ color: "white" }}>
              <Label for="exampleSearch"  style={{ color: "white" }}>Search Recipe</Label>
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
                backgroundColor: "#FF8802",
                borderColor: "white",
                color: "white"
              }}>Search</Button>
          </Form>
        </Container>
            <RecipeList recipes={this.state.recipeList} btnType={"Save"} saveRecipe={this.saveRecipe}/>
      </Card>
    );
  };
}

SearchList.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(SearchList);