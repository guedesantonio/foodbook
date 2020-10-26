import React from 'react';
import { Card, Container} from 'reactstrap';
import RecipeList from "../recipeList/recipeList"


function ProfileRecipeList(props) {
  


    return(
      <Card style={{ backgroundColor: "#FF8802", color: "white" }}>
        <Container className="themed-container" fluid={true}>
        </Container>
            <RecipeList recipes={props.recipeList} btnType={"Delete"}/>
      </Card>
    );
}

export default ProfileRecipeList;