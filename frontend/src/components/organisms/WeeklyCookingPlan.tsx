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

    // <div>
    //   <h2 className="text-sm font-medium text-gray-500">Mein</h2>
    //   <ul
    //     role="list"
    //     className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
    //   >
    //     {projects.map((project) => (
    //       <li
    //         key={project.name}
    //         className="col-span-1 flex rounded-md shadow-sm"
    //       >
    //         <div
    //           className={classNames(
    //             project.bgColor,
    //             "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
    //           )}
    //         >
    //           {project.initials}
    //         </div>
    //         <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
    //           <div className="flex-1 truncate px-4 py-2 text-sm">
    //             <a
    //               href={project.href}
    //               className="font-medium text-gray-900 hover:text-gray-600"
    //             >
    //               {project.name}
    //             </a>
    //             <p className="text-gray-500">{project.members} Members</p>
    //           </div>
    //           <div className="flex-shrink-0 pr-2">
    //             <button
    //               type="button"
    //               className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //             >
    //               <span className="sr-only">Open options</span>
    //               {/*<EllipsisVerticalIcon*/}
    //               {/*  className="h-5 w-5"*/}
    //               {/*  aria-hidden="true"*/}
    //               {/*/>*/}
    //             </button>
    //           </div>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}