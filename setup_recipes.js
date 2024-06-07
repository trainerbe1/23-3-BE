import prismaClient from "./src/common/prisma.js";
import { readFileSync } from "fs";

const recipes = JSON.parse(readFileSync('recipes.json', 'utf8'));

console.log(`Detected ${recipes.length} Recipes...`);

(async function setup() {
    let errors = 0;

    for(const recipe of recipes) {
        try {
            const checkRecipeExist = await prismaClient.recipes.findFirst({
                where: {
                    name: recipe.name
                }
            });
    
            if(checkRecipeExist == null) {
                let area = await prismaClient.areas.findFirst({
                    where: {
                        name: recipe.area
                    }
                });
            
                if(area == null) {
                    const newArea = await prismaClient.areas.create({
                        data: {
                            name: recipe.area
                        }
                    });
        
                    area = newArea;
                }
        
                let category = await prismaClient.categories.findFirst({
                    where: {
                        name: recipe.category
                    }
                });
            
                if(category == null) {
                    const newCategory = await prismaClient.categories.create({
                        data: {
                            name: recipe.category,
                        }
                    });
        
                    category = newCategory;
                }
    
                await prismaClient.recipes.create({
                    data: {
                        img_url: recipe.img_url,
                        ingredient: recipe.ingredient,
                        instructions: recipe.instructions,
                        name: recipe.name,
                        video_url: recipe.video_url,
                        category_id: category.id,
                        area_id: area.id,
                        tags: recipe.tag,
                    }
                });
            }
        } catch (error) {
            console.error(error);
            errors++;
        }
    }

    console.log(`Setup Finished with ${errors} Errors of ${recipes.length}`);
})();
