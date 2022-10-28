import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe, RecipeResponse } from '../recipe';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  public recipe:Recipe;
  constructor(private recipeService:RecipeService, private router:Router) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getter();
  }

  createUpdate(){
    if(!this.recipe._id){
      this.recipeService.createRecipe(this.recipe).subscribe((data:RecipeResponse) => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      (error:RecipeResponse) => {
        console.log(error.errmsg);
      });
    }
    else{
      this.recipeService.updateRecipe(this.recipe).subscribe((data:RecipeResponse) => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      (error:RecipeResponse) => {
        console.log(error.errmsg);
      });
    }
  }

}
