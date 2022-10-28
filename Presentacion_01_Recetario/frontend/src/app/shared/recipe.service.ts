import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUri:string = "http://localhost:8080";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private recipe: Recipe;
  
  constructor(private http:HttpClient) { }

  createRecipe(recipe:Recipe){
    return this.http.post(this.baseUri+"/create", recipe, {headers: this.headers});
  }

  getRecipes(){
    return this.http.get(this.baseUri+"/get", {headers: this.headers});
  }

  updateRecipe(recipe:Recipe){
    return this.http.put(this.baseUri+"/update", recipe, {headers: this.headers});
  }

  deleteRecipe(id:string){
    return this.http.delete(this.baseUri+"/delete/"+id, {headers: this.headers});
  }

  setter(recipe:Recipe){
    this.recipe = recipe;
  }

  getter(){
    return this.recipe;
  }
}
