import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe, RecipeResponse } from '../recipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Error',
        text: 'Rellene todos los campos',
        icon: 'error',
        confirmButtonColor: '#0275d8'
      });
      return;
    }
    if(!this.recipe._id){
      this.recipeService.createRecipe(this.recipeForm.value).subscribe((data:RecipeResponse) => {
        Swal.fire({
          title: 'Proceso exitoso',
          text: 'Se ha ingresado la receta',
          icon: 'success',
          confirmButtonColor: '#0275d8',
          didClose: () => {
            this.router.navigate(["/"]);
          }
        });
      },
      (error:RecipeResponse) => {
        Swal.fire({
          title: 'Error',
          text: 'Intente nuevamente en unos minutos',
          icon: 'error',
          confirmButtonColor: '#0275d8'
        });
        console.log(error.errmsg);
      });
    }
    else{
      this.recipeService.updateRecipe(this.recipeForm.value).subscribe((data:RecipeResponse) => {
        Swal.fire({
          title: 'Proceso exitoso',
          text: 'Se ha actualizado la receta',
          icon: 'success',
          confirmButtonColor: '#0275d8',
          didClose: () => {
            this.router.navigate(["/"]);
          }
        });
      },
      (error:RecipeResponse) => {
        Swal.fire({
          title: 'Error',
          text: 'Intente nuevamente en unos minutos',
          icon: 'error',
          confirmButtonColor: '#0275d8'
        });
        console.log(error.errmsg);
      });
    }
  }

}
