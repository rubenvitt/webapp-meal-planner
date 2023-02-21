import { NextApiRequest, NextApiResponse } from "next";
import { RecipeBackendService } from "@backend-service/recipe-backend-service";
import {
  handleOptions,
  requireAnyOfContentTypes,
  requireAnyOfMethods,
} from "@utils/api";

const requireMethod = requireAnyOfMethods(["GET"]);
const requireContentType = requireAnyOfContentTypes(["application/json"]);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  handleOptions(req, res);
  if (!requireMethod(req, res)) return;
  if (!requireContentType(req, res)) return;

  const recipes = await RecipeBackendService.getRecipes();
  res.status(200).json(recipes);
};

export default handler;
