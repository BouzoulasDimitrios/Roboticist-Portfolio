import CADModelCard from "@/components/cad/CADModelCard";
import { cadModels } from "@/app/data/cadModels";

export default function CADModelsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="max-w-4xl mx-auto text-4xl font-bold mb-8">CAD Models</h1>
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {cadModels.map((model) => (
          <CADModelCard key={model.title} model={model} />
        ))}
      </div>
    </main>
  );
}
