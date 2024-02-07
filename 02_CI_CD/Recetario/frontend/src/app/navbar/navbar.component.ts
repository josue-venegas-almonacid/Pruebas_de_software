import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  newRecipe(event: any){
    event.preventDefault();
    this.recipeService.setter(new Recipe());
    this.router.navigate(["/createUpdate"]);
  }

}
