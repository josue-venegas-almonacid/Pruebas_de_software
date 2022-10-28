export class Recipe {
  public _id: string;
  public name: string;
  public ingredients: string;
  public instructions: string;
}

export class RecipeResponse{
  msg?: Recipe[];
  errmsg?: Error;
}
