import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { RecipeResponse, Recipe } from '../recipe';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  checkRecipe(recipe:Recipe){
    this.recipeService.setter(recipe);
    this.router.navigate(["/check"]);
  }

  updateRecipe(recipe:Recipe){
    this.recipeService.setter(recipe);
    this.router.navigate(["/createUpdate"]);
  }

  deleteRecipe(recipe:Recipe){
    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro que desea eliminar esta receta?',
      icon: 'question',
      confirmButtonColor: '#0275d8',
      confirmButtonText: 'Eliminar',
      showCancelButton: true,
      cancelButtonText: 'Conservar',
    }).then((result: any) => {
      if (result.isConfirmed){
        this.recipeService.deleteRecipe(recipe._id).subscribe((data:RecipeResponse) =>{
          this.recipes?.splice(this.recipes.indexOf(recipe), 1);
          Swal.fire({
            title: 'Proceso exitoso',
            text: 'Se ha eliminado la receta',
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
    });
  }

}
