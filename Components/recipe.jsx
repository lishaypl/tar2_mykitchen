import React from 'react';
import {Card,Button} from 'react-bootstrap';



function Recipe (props){

    const recipe = props.recipe;
    const btnText = props.btnText;
    const {clickEvent,btnColor} = props;

    return( 
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    {recipe.cookingMethod}
                    
                </Card.Text> 
                <Button onClick={()=>clickEvent(recipe)} variant={btnColor}>
                    {btnText}
                </Button>
            </Card.Body>
        </Card>
    );
}
 
export default Recipe;
