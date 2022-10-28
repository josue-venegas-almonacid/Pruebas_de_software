import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { RecipeResponse, Recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public recipes:Recipe[] | undefined;
  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    this.recipeService.getRecipes().subscribe((data:RecipeResponse) =>{
      this.recipes = data.msg;
    },
    (error:RecipeResponse) => {
      console.log(error.errmsg);
    })
  }

  updateRecipe(recipe:Recipe){
    this.recipeService.setter(recipe);
    this.router.navigate(["/createUpdate"]);
  }

  deleteRecipe(recipe:Recipe){
    this.recipeService.deleteRecipe(recipe._id).subscribe((data:RecipeResponse) =>{
      this.recipes?.splice(this.recipes.indexOf(recipe), 1);
    },
    (error:RecipeResponse) => {
      console.log(error.errmsg);
    })
  }

}
