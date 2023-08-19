import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  loadedRecipe?: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService, private router: Router,
    private alertCtr: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) return;
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId!);
    })
  }
  onDeleteRecipe() {
    this.alertCtr.create({
      header: 'Are you sur ?',
      message: 'Do you really want to delete the recipe ?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe?.id!);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
  }


}
