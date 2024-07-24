import AppList from "@/components/AppList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10 h-full overflow-auto">
      <AppList />
    </main>
  );
}
