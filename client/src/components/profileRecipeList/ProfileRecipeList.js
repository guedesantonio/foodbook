import React from 'react';
import { Card } from 'reactstrap';
import RecipeList from "../recipeList/recipeList"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

class ProfileRecipeList extends React.Component {
  
  userId = this.props.auth.user.id
  onRecipeDelete = this.props.onRecipeDelete

  deleteRecipe = (recipe) => {
    const onRecipeDelete = this.onRecipeDelete
    axios.delete("/api/users/recipe/" + this.userId + "/" + recipe.id, recipe).then(() => {
      console.log("Recipe deleted")
      onRecipeDelete()
    })
  }
  render(){
    return(
      <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
          <RecipeList recipes={this.props.recipeList} btnType={"Delete"} SaveOrDeleteRecipe={this.deleteRecipe}/>
      </Card>
    );
  };
}

ProfileRecipeList.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(ProfileRecipeList);

