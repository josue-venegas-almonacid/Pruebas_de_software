import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe, RecipeResponse } from '../recipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  constructor(private recipeService:RecipeService, private router:Router, private fb:FormBuilder) { }

  public recipe:Recipe;
  public recipeForm:FormGroup;
  
  ngOnInit(): void {
    this.recipe = this.recipeService.getter();
    this.recipeForm = this.fb.group({
      _id:          [this.recipe?._id],
      name:         [this.recipe?.name, [Validators.required]],
      image:        [this.recipe?.image, [Validators.required]],
      ingredients:  [this.recipe?.ingredients, [Validators.required]],
      instructions: [this.recipe?.instructions, [Validators.required]]
    });
  }

  createUpdate(){
    if(this.recipeForm.invalid){
      console.log("ERROR");
      return;
    }
    if(!this.recipe._id){
      this.recipeService.createRecipe(this.recipeForm.value).subscribe((data:RecipeResponse) => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      (error:RecipeResponse) => {
        console.log(error.errmsg);
      });
    }
    else{
      this.recipeService.updateRecipe(this.recipeForm.value).subscribe((data:RecipeResponse) => {
        console.log(data);
        this.router.navigate(["/"]);
      },
      (error:RecipeResponse) => {
        console.log(error.errmsg);
      });
    }
  }

}
