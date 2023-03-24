import Routers from "../Routers";
import { SelectorItem } from "./Types";

export const mainMenu: SelectorItem[] = [
    {
        id: 2,
        image: "/Images/workout-plan.svg",
        title: "My workouts",
        description: "Start one of your workouts", 
        navigateTo: Routers.myWorkouts
    },
    {
        id: 1,
        image: "/Images/nutrition.svg",
        title: "Nutrition",
        description: "Manage your nutrition, calculate your macro , see diets"
    },
]