import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() { // creation
    //console.log('refresh recipes');
    //this.recipes = this.recipeService.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes();
  }


}
