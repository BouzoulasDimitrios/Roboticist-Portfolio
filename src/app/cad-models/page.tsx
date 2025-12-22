import CADModelCard from "@/components/cad/CADModelCard";
import { cadModels } from "@/app/data/cadModels";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function CADModelsPage() {
  const slugCounts = new Map<string, number>();
  const modelWithIds = cadModels.map((model, index) => {
    const baseSlug = slugify(model.title);
    const fallbackSlug = `cad-model-${index + 1}`;
    const slug = baseSlug.length > 0 ? baseSlug : fallbackSlug;
    const nextCount = (slugCounts.get(slug) ?? 0) + 1;
    slugCounts.set(slug, nextCount);
    return {
      model,
      id: nextCount > 1 ? `${slug}-${nextCount}` : slug,
    };
  });

  return (
    <main className="px-4 py-10 flex gap-8">
      <aside className="bg-gray-900/90 text-white border border-gray-800 rounded-lg px-4 py-6 h-fit sticky top-24 min-w-[220px]">
        <h2 className="text-lg font-semibold mb-4">CAD Models</h2>
        <nav aria-label="CAD model quick links">
          <ul className="space-y-2">
            {modelWithIds.map(({ model, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 transition-colors"
                >
                  {model.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-white">CAD Models</h1>
            <p className="text-gray-200">
              Interact with sample assemblies or jump straight to their GrabCAD resources. For more, visit{" "}
              <a href="https://grabcad.com/username" className="text-blue-500 hover:underline">
                GrabCAD
              </a>
              .
            </p>
          </div>
          {modelWithIds.map(({ model, id }) => (
            <CADModelCard key={id} model={model} cardId={id} />
          ))}
        </div>
      </div>
    </main>
  );
}
