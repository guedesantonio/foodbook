import React from 'react';
import { Card, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap';
import RecipeService from "../../services/RecipeService"

console.log(RecipeService.getRecipeList());

const SearchList = (props) => {
  return (
    <Card style={{ backgroundColor: "#3C5A98", color: "RED" }}>
      <div className="row">
      <div className="col s12 ">
      <Form style={{ padding: "10px", color: "white" }}>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search placeholder"/>
      </FormGroup>
      </Form>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
    </div>
    </Card>
  );
}

export default SearchList;