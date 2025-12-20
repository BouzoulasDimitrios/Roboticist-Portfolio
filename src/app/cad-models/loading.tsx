export default function CADModelsLoading() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-4 h-8 w-64 rounded bg-gray-800/60" />
        <p className="mb-4 text-sm font-semibold text-gray-200">3D models loading…</p>
        <div className="mb-8 h-3 w-full overflow-hidden rounded-full bg-gray-800/70">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-indigo-500" />
        </div>
        <div className="space-y-6">
          <div className="h-64 rounded-lg border border-gray-800 bg-gray-900/60" />
          <div className="h-64 rounded-lg border border-gray-800 bg-gray-900/60" />
          <div className="h-64 rounded-lg border border-gray-800 bg-gray-900/60" />
        </div>
      </div>
    </main>
  );
}
