import axios from "axios";

const apiKey = "5251ecf8756e4993a1833647f2083118"

// class containing main services for the app
export default class RecipeService {
    static async getRecipeList() {
        try {
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${apiKey}`);
            return res.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
