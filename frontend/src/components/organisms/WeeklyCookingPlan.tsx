import React from "react";
import moment from "moment";
import { CookingPlanItem, Meal, MealType } from "@molecules/CookingPlanItem";
import { faker } from "@faker-js/faker";

const meals = [
  new Meal(
    "Nudeln mit Thunfisch",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.FISH
  ),
  new Meal(
    "Pizza mit Salami",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.MEAT
  ),
  new Meal(
    "Pasta mit Tomatensoße",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.VEGAN
  ),
  new Meal(
    "Käsefondue",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.VEGETARIAN
  ),
  new Meal(
    "Kartoffelsuppe",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.VEGETARIAN
  ),
  new Meal(
    "Kartoffelgratin",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.VEGETARIAN
  ),
  new Meal(
    "Kartoffelsalat",
    faker.random.numeric(3),
    Number(faker.random.numeric(2)) % 5,
    [
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
    ],
    MealType.VEGETARIAN
  ),
];

export default function WeeklyCookingPlan() {
  return (
    <div className="bg-gray-200 py-6">
      <h2 className="font-medium mb-3 ml-2 text-2xl">Wochenübersicht</h2>
      <ul
        role="list"
        className="bg-gray-200 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2"
      >
        {meals.map((meal, index) => {
          return (
            <CookingPlanItem
              plannedFor={moment().add(index, "day")}
              meal={meal}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
