import React, { useState , useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import SearchList from '../searchList/SearchList.js';
import ProfileRecipeList from '../profileRecipeList/ProfileRecipeList.js';
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfileTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const [recipeList, setrecipeList] = useState([]);

  const getUserRecipes = () => {
    axios.get("/api/users/recipes/" + props.auth.user.id).then( (res) => {
      setrecipeList(res.data)
    }
    )
  }

  useEffect( () => {
    getUserRecipes()
  },[]);

  
  return (
    <Card 
    style={{
      backgroundColor:"#FF8802", 
      color:"white",
      boxShadow: "3px 3px 5px 6px rgba(0, 0, 0, 0.4)",
      }}>
      <Nav tabs>
        <NavItem>
          <NavLink
            style={{color:"white",fontWeight:"500",textShadow:" 1px 2px 2px BLACK "}}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            MY RECIPES
          </NavLink>
        </NavItem>
        <NavItem >
          <NavLink 
            style={{color:"white",fontWeight:"500",textShadow:" 1px 2px 2px BLACK "}}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            SEARCH
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <ProfileRecipeList recipeList={recipeList} onRecipeDelete={getUserRecipes}/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <SearchList onRecipeSave={getUserRecipes}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Card>
  );
}

ProfileTab.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(ProfileTab);

