class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id=id;
        this.categoryIds=categoryIds;
        this.title=title;
        this.Meal=Meal;
        this.affordability=affordability;
        this.complexity=complexity;
        this.imageUrl=imageUrl;
        this.steps=steps;
        this.isVegetarian=isVegetarian;
        this.isVegan=isVegan;
        this.isLactoseFree=isLactoseFree;
        this.isGlutenFree=isGlutenFree;
        this.duration=duration;
    }
}
export default Meal;