interface Props {
  params: {
    recipeId: string;
  };
}

export default function RecipePage({ params }: Props) {
  return (
    <>
      <h1>Recipe {params.recipeId}</h1>
    </>
  );
}
