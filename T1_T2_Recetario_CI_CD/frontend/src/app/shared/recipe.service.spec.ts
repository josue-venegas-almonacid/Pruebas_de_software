import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe.service';
import { Recipe, RecipeResponse } from '../recipe';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ]
    });
    // service = TestBed.inject(RecipeService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new RecipeService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a recipe', (done: DoneFn) => {
    const mockRecipe: Recipe = {
      "_id": "", 
      "name":"EJEMPLO",
      "ingredients":"INGREDIENTES DE EJEMPLO",
      "instructions": "INSTRUCCIONES DE EJEMPLO", 
      "image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"
    };
  
    const mockResult: RecipeResponse = {
      msg: [
        {
          "_id": "", 
          "name":"EJEMPLO",
          "ingredients":"INGREDIENTES DE EJEMPLO",
          "instructions": "INSTRUCCIONES DE EJEMPLO", 
          "image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"
        }
      ]
    };
  
    httpClientSpy.post.and.returnValue(of(mockResult));
  
    service.createRecipe(mockRecipe).subscribe((response: RecipeResponse) => {
      expect(response).toEqual(mockResult);
      done();
    });

    expect(httpClientSpy.post.calls.count())
    .withContext('one call')
    .toBe(1);
  });

  it('should not save a recipe', (done: DoneFn) => {
    const mockRecipe: any = { };
    const mockResult = new HttpErrorResponse({
      status: 400,
    });
  
    httpClientSpy.post.and.returnValue(throwError(mockResult));
    service.createRecipe(mockRecipe).subscribe(
      (response: RecipeResponse) => {},
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400);
        done();
      });
  });

  it('should get all recipes', (done: DoneFn) => {
    const mockResult: RecipeResponse = {
      msg: [
      {"_id":"635b8e4591d09d4780ee3806","name":"Fettuccine Alfredo - 4 porciones","ingredients":"250 g de fettuccine al huevo.\n180 g de parmesano Reggiano\n80 g de mantequilla\nSal\nPimienta negra (opcional)\nNuez moscada (opcional)","instructions":"1. Cocer las fettuccine en abundante agua salada.\n2. Poner la mantequilla y el parmesano rallado en un bol grande.\n3. Cuando las fetuccine estén ya casi al dente, tomar un par de cucharones de su agua de cocción y echarlos a la mantequilla y el parmesano.\n4. Remover la mantequilla y el parmesano hasta formar una crema de la misma consistencia de una bechamel ligera. Añadir un poco más de agua de cocción, si queda demasiado espesa.\n5. Condimentar la crema con un poco de pimienta negra y nuez moscada.\n6. Añadir las fettucine escurridas a la crema.\n7. Mezclar bien las fettucine con la crema.\n8. Servir con un poco mas de pimienta negra por encima.","image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"},
      {"_id":"635b8ed691d09d4780ee3809","name":"Lasagna tradicional - 4 porciones","ingredients":"1 cucharada de aceite (14 g)\n1 diente de ajo pelado y finamente picado (3 g)\n1 pimentón rojo sin semilla y cortado en cubos pequeños (120 g)\n1 cebolla cabezona blanca, finamente picada (80 g)\n2 tomates rojos medianos sin piel, finamente picados (240 g)\n1 sobre de CALDO CON COSTILLA MAGGI® DESMENUZADO (9 g)\n1 libra de carne molida magra (500 g)\n1 1/2 tazas de agua (375 ml)\n1/2 caja de pasta para lasaña precocida (250 g)\n8 lonjas de queso mozzarella (136 g)\n1 sobre de BASE PARA SALSA BECHAMEL MAGGI® (50 g)\n1 taza de leche (250 ml)\n1 taza de agua (250 ml)\n4 cucharadas de queso parmesano rallado (20 g)","instructions":"PASO 1: Precalienta el horno\nPrecalienta el horno a 180°C/ 360°F 30 minutos antes de la preparación.\n\nPASO 2: Prepara la carne\nCalienta el aceite en una sartén a fuego medio durante 3 minutos; luego sofríe el ajo, el pimentón, la cebolla y el tomate. Añade el sobre de CALDO CON COSTILLA MAGGI® DESMENUZADO y cocina por 2 minutos. Adiciona la carne y sofríe por 5 minutos sin dejar de remover, luego agrega el agua hasta que hierva y la carne se cocine.\nRetira del fuego y reserva hasta el momento de usar\n\nPASO 3: Pasa la pasta por agua tibia\nPasa la pasta para lasaña por agua tibia con el fin de que no se parta en el momento de armarla.\n\nPASO 4: Haz la salsa\nDisuelve el contenido del sobre de BASE PARA SALSA BECHAMEL MAGGI® en una taza de agua fría y una taza de leche, mezcla hasta disolver bien. Lleva a fuego medio en una olla por 5 minutos sin dejar de remover, hasta que hierva y espese. Retira del fuego.\n\nPASO 5: Arma la lasaña\nPon en el fondo de la refractaria o molde una cama de carne, encima las láminas de pasta, la mitad de la salsa y una cama de queso mozzarella. Repite estos pasos hasta terminar los ingredientes, asegurando que la última capa sea de pasta y salsa. Por último, espolvorea el queso parmesano encima.\n\n\nLleva la refractaria o molde al horno y déjala por 10 a 15 minutos aproximadamente o hasta gratinar.\n\nPASO 6: Sirve\nRetira del horno y sirve","image":"https://www.recetasdesbieta.com/wp-content/uploads/2018/10/lasagna-original..jpg"},
      {"_id":"635b8f4491d09d4780ee380c","name":"Papas crocantes al horno con romero - 4 porciones","ingredients":"1 cucharada de hojas de romero (3 g)\n1 cucharadita de SAZONADOR NATURISIMO MAGGI® (6 g)\n2 cucharadas de aceite (28 g)\n1 libra de papa sabanera lavada y cortadas en cuartos (500 g)","instructions":"PASO 1 Calienta el horno\nPrecalienta el horno a 180ºC /(350ºF), 30 minutos antes de la preparación.\n\nPASO 2 Sazona las papas\nEn un recipiente hondo mezcla las papas con el aceite, el SAZONADOR NATURISIMO MAGGI® y el romero.\n\nPASO 3 Acomoda las papas\nEn una lata de horno añade las papas teniendo cuidado de que no queden unas encima de otras.\n\nPASO 4 Hornea\nHornea las papas durante 30 minutos o hasta que estén bien doradas y crocantes, revolviendo de vez en cuando para que se cocinen de manera uniforme.\n\nPASO 5 Sirve\nPor último retira la papas del horno con cuidado y sirve caliente.","image":"https://images.aws.nestle.recipes/resized/d0bafacd608a6fd586c66839cc3d8ca0_1200x600_0002_papas_romero_2_1200_600.jpg"}
      ]
    };
  
    httpClientSpy.get.and.returnValue(of(mockResult));
  
    service.getRecipes().subscribe((response: RecipeResponse) => {
      expect(response).toEqual(mockResult);
      done();
    });

    expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
  });

  it('should update a recipe', (done: DoneFn) => {
    const mockRecipe: Recipe = {
      "_id":"635b8e4591d09d4780ee3806",
      "name":"Fettuccine Alfredo - 4 porciones",
      "ingredients":"250 g de fettuccine al huevo.\n180 g de parmesano Reggiano\n80 g de mantequilla\nSal\nPimienta negra (opcional)\nNuez moscada (opcional)",
      "instructions":"1. Cocer las fettuccine en abundante agua salada.\n2. Poner la mantequilla y el parmesano rallado en un bol grande.\n3. Cuando las fetuccine estén ya casi al dente, tomar un par de cucharones de su agua de cocción y echarlos a la mantequilla y el parmesano.\n4. Remover la mantequilla y el parmesano hasta formar una crema de la misma consistencia de una bechamel ligera. Añadir un poco más de agua de cocción, si queda demasiado espesa.\n5. Condimentar la crema con un poco de pimienta negra y nuez moscada.\n6. Añadir las fettucine escurridas a la crema.\n7. Mezclar bien las fettucine con la crema.\n8. Servir con un poco mas de pimienta negra por encima.",
      "image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"
    };

    const mockResult: RecipeResponse = {
      msg: [
        {
          "_id":"635b8e4591d09d4780ee3806",
          "name":"Fettuccine Alfredo - 4 porciones",
          "ingredients":"250 g de fettuccine al huevo.\n180 g de parmesano Reggiano\n80 g de mantequilla\nSal\nPimienta negra (opcional)\nNuez moscada (opcional)",
          "instructions":"1. Cocer las fettuccine en abundante agua salada.\n2. Poner la mantequilla y el parmesano rallado en un bol grande.\n3. Cuando las fetuccine estén ya casi al dente, tomar un par de cucharones de su agua de cocción y echarlos a la mantequilla y el parmesano.\n4. Remover la mantequilla y el parmesano hasta formar una crema de la misma consistencia de una bechamel ligera. Añadir un poco más de agua de cocción, si queda demasiado espesa.\n5. Condimentar la crema con un poco de pimienta negra y nuez moscada.\n6. Añadir las fettucine escurridas a la crema.\n7. Mezclar bien las fettucine con la crema.\n8. Servir con un poco mas de pimienta negra por encima.",
          "image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"
        }
      ]
    };
  
    httpClientSpy.put.and.returnValue(of(mockResult));
  
    service.updateRecipe(mockRecipe).subscribe((response: RecipeResponse) => {
      expect(response).toEqual(mockResult);
      done();
    });

    expect(httpClientSpy.put.calls.count())
    .withContext('one call')
    .toBe(1);
  });

  it('should not update a recipe', (done: DoneFn) => {
    const mockRecipe: any = { 
      "_id":"635b8e4591d09d4780ee3806",
    };
    const mockResult = new HttpErrorResponse({
      status: 400,
    });
  
    httpClientSpy.put.and.returnValue(throwError(mockResult));
    service.updateRecipe(mockRecipe).subscribe(
      (response: RecipeResponse) => {},
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400);
        done();
      });
  });

  it('should delete a recipe', (done: DoneFn) => {
    const mockRecipeID: string = "635b8e4591d09d4780ee3806";

    const mockResult: RecipeResponse = {
      msg: [
        {
          "_id":"635b8e4591d09d4780ee3806",
          "name":"Fettuccine Alfredo - 4 porciones",
          "ingredients":"250 g de fettuccine al huevo.\n180 g de parmesano Reggiano\n80 g de mantequilla\nSal\nPimienta negra (opcional)\nNuez moscada (opcional)",
          "instructions":"1. Cocer las fettuccine en abundante agua salada.\n2. Poner la mantequilla y el parmesano rallado en un bol grande.\n3. Cuando las fetuccine estén ya casi al dente, tomar un par de cucharones de su agua de cocción y echarlos a la mantequilla y el parmesano.\n4. Remover la mantequilla y el parmesano hasta formar una crema de la misma consistencia de una bechamel ligera. Añadir un poco más de agua de cocción, si queda demasiado espesa.\n5. Condimentar la crema con un poco de pimienta negra y nuez moscada.\n6. Añadir las fettucine escurridas a la crema.\n7. Mezclar bien las fettucine con la crema.\n8. Servir con un poco mas de pimienta negra por encima.",
          "image":"https://www.laragazzacolmattarello.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2014/04/IMG_9307m.jpg.webp"
        }
      ]
    };
  
    httpClientSpy.delete.and.returnValue(of(mockResult));
  
    service.deleteRecipe(mockRecipeID).subscribe((response: RecipeResponse) => {
      expect(response).toEqual(mockResult);
      done();
    });

    expect(httpClientSpy.delete.calls.count())
    .withContext('one call')
    .toBe(1);
  });

  it('should not delete a recipe', (done: DoneFn) => {
    const mockRecipeID: string = "";
    const mockResult = new HttpErrorResponse({
      status: 400,
    });
  
    httpClientSpy.delete.and.returnValue(throwError(mockResult));
    service.deleteRecipe(mockRecipeID).subscribe(
      (response: RecipeResponse) => {},
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(400);
        done();
      });
  });
});
