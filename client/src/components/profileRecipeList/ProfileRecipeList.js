import React from 'react';
import { Card, Container} from 'reactstrap';
import RecipeList from "../recipeList/recipeList"


class ProfileRecipeList extends React.Component {
  

  render(){
    return(
      <Card style={{ backgroundColor: "#3C5A98", color: "white" }}>
        <Container className="themed-container" fluid={true}>
        </Container>
            <RecipeList recipes={""} btnType={"Delete"}/>
      </Card>
    );
  };
}

export default ProfileRecipeList; 