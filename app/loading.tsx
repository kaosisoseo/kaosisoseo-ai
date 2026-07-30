export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />

        <h2 className="text-2xl font-bold text-green-600">
  KaosisoSEO
</h2>

<p className="text-gray-500">
  Optimizing your experience...
</p>

      </div>
    </div>
  );
}