import React from 'react';
import {Ingredient} from '../Classes/Ingredeint';
import {DishRecipe} from '../Classes/DishRecipe';
import {data} from '../data';
import Recipes from './Recipes';

export default class MyKitchen extends React.Component{
    constructor(props){
        super(props);
        this.ingredients = [];
        this.changed=false

        this.state={
            recipes:[],
            recipesMade:[],
            counter:0,
        }
       
        console.log("before getIngredients ")

        this.getIngredients = this.getIngredients.bind(this);
    }
    
    componentDidMount(){
        console.log("in componentDidMount")

        if(this.changed){
        this.getIngredients();
        this.createDishs();
        }
        console.log("b4 " + this.changed)
        this.changed=true;
        console.log("after " + this.changed)
        
    }

    getIngredients=()=>{
        data.map((item)=>this.ingredients.push(new Ingredient(item.id,item.name,item.image,item.calories)))
        console.log("in getIngredients")
    }   
    createDishs=()=>{
        console.log("in createDishs")

        const ings1 = [this.ingredients[0],this.ingredients[1],this.ingredients[2],this.ingredients[3]];
        const padThai = new DishRecipe("Pad Thai",ings1,60,"stir-fry dish, mix all ingredients together","https://fullofplants.com/wp-content/uploads/2022/03/easy-vegan-pad-thai-noodle-dish-with-bean-sprouts-thumb.jpg");
        const ings2 = [this.ingredients[0],this.ingredients[6],this.ingredients[5],this.ingredients[3]];
        const chopSuey = new DishRecipe("Chop Suey",ings2,5,"5 minute stir fry,add each vegetable in the order in which they cook.","https://kirbiecravings.com/wp-content/uploads/2020/04/chop-suey-5.jpg");
        const ings3 = [this.ingredients[0],this.ingredients[1],this.ingredients[2],this.ingredients[3],this.ingredients[4],this.ingredients[5],this.ingredients[6],this.ingredients[7]];
        const pho = new DishRecipe("Pho",ings3,60,"slow-cooked soup","https://www.fodmapeveryday.com/wp-content/uploads/2017/06/Pho-closeup-copy-855x570.jpg");
        console.log("before")
        this.setState(prevState=>({
            recipes:[...prevState.recipes,chopSuey,padThai,pho]}))
        console.log("after")

    }
  
    changeRecipes=(recipe)=>{
        //remove from recipes
        let temp = [...this.state.recipes];
        temp = temp.filter(item=>item.name!==recipe.name);
        this.setState({
            recipes:[...temp]
        })
        //add to made recipes
        temp = [...this.state.recipesMade,recipe];
        this.setState({
            recipesMade:[...temp],
            counter:this.state.counter+1
        })
    }
    changeMadeRecipes=(recipe)=>{
        console.log("in changeMadeRecipes")

        //remove from made recipes
        let temp = [...this.state.recipesMade];
        temp = temp.filter(item=>item.name!==recipe.name);
        this.setState({
            recipesMade:[...temp],
            counter:this.state.counter-1
        })
        //add to recipes
        temp = [...this.state.recipes,recipe];
        this.setState({
            recipes:[...temp]
        })
    }
    render(){
        console.log("rendering")
       
        return(
            
            <>
                <Recipes btnText="Prepare dish!" btnColor="outline-primary" title="Recipes" changeView={this.changeRecipes} recipes={this.state.recipes}/>
                <Recipes btnText="eat!" btnColor="outline-danger" counter={this.state.counter} title="Ready to EAT!" changeView={this.changeMadeRecipes} recipes={this.state.recipesMade}/>
            </>
        )
    }
}
