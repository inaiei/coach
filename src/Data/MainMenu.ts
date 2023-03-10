import { SelectorItem } from "./Types";

export const mainMenu: SelectorItem[] = [
    {
        id: 1,
        image: "/Images/nutrition.svg",
        title: "Nutrition",
        description: "Manage your nutrition, calculate your macro , see diets"
    },
    {
        id: 2,
        image: "/Images/workout-plan.svg",
        title: "Workout",
        description: "Create a new workout session", 
        navigateTo: "/new-workout"
    },
]