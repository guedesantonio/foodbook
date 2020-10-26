import React from 'react';
import { Card, Container} from 'reactstrap';
import RecipeList from "../recipeList/recipeList"


function ProfileRecipeList(props) {
  


    return(
      <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
          <RecipeList recipes={props.recipeList} btnType={"Delete"}/>
      </Card>
    );
}

export default ProfileRecipeList;