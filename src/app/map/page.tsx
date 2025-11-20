import BaseMap from "@/components/map/BaseMap";

export default function MapPage() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-xl font-semibold mb-4">
        Mapa – BB GreenCorridors
      </h1>
      <BaseMap />
    </main>
  );
}
