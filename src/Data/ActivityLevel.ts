import { ActivityLevel } from "./Types";

export const activityLevel: ActivityLevel[] = [
    {
        id:1,
        image: "/Images/walking.svg", 
        title: "Very light", 
        description: "Almost no purpose exercise", 
        factor: 1.2
    }, 
    {
        id:2,
        image: "/Images/yoga-asana.svg", 
        title: "Light", 
        description: "1-3 hours of gentle to moderaate exercise", 
        factor: 1.375
    }, 
    {
        id:3,
        image: "/Images/exercise-gym-bike.svg", 
        title: "Moderate", 
        description: "3-4 hours of moderate exercise", 
        factor: 1.55
    }, 
    {
        id:4,
        image: "/Images/dumbbells-exercise.svg", 
        title: "Intense", 
        description: "4-6 hours of moderate to strenuous exercise", 
        factor: 1.725
    }, 
    {
        id:5,
        image: "/Images/weight-lifting.svg", 
        title: "Very intense", 
        description: "7+ hours of strenuous exercise", 
        factor: 1.9
    }, 
]