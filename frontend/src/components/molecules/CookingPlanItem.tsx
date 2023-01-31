import React from "react";
import moment from "moment";
import { DescriptionList } from "@atoms/DescriptionList";
import "moment/locale/de";

export class MealType {
  static readonly FISH = new MealType("FISH", "blue-500");
  static readonly MEAT = new MealType("MEAT", "red-500");
  static readonly VEGAN = new MealType("VEGAN", "green-500");
  static readonly VEGETARIAN = new MealType("VEGETARIAN", "yellow-500");

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}

/* tailwind colors:
// background colors
bg-blue-500
bg-red-500
bg-green-500
bg-yellow-500

// border colors
border-blue-500
border-red-500
border-green-500
border-yellow-500
 */

export class Meal {
  name: string;
  preparationTime: string;
  servings: number;
  ingredients: string[];
  type: MealType;

  constructor(
    name: string,
    preparationTime: string,
    servings: number,
    ingredients: string[],
    type: MealType
  ) {
    this.name = name;
    this.preparationTime = preparationTime;
    this.servings = servings;
    this.ingredients = ingredients;
    this.type = type;
  }
}

interface Props {
  plannedFor: moment.Moment;
  meal: Meal;
}

export function CookingPlanItem({ plannedFor, meal }: Props) {
  return (
    <li className="shadow-md flex flex-col m-2 rounded-lg">
      <div
        className={`bg-${meal.type.color} text-white w-full text-sm flex items-center justify-center font-medium p-1 rounded-t-md`}
      >
        {plannedFor.diff(moment(), "days") === 0
          ? "Heute"
          : plannedFor.fromNow()}
      </div>
      <div
        className={`border-x border-b rounded-b-lg border-${meal.type.color}`}
      >
        <div className="p-1">{meal.name}</div>
        <dl className="p-1 text-gray-700 p-1">
          <DescriptionList
            classNames={{
              dt: "text-sm font-bold",
              dd: "text-sm",
            }}
            items={[
              { name: "Zubereitung", value: meal.preparationTime + " Minuten" },
              { name: "Menge", value: String(meal.servings) + " Personen" },
            ]}
          />
        </dl>
      </div>
    </li>
  );
}
