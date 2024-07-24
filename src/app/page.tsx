import AppList from "@/components/AppList";
import { getSession } from "../../auth.lib.server";
import LogInSection from "@/components/LogInSection";
import Header from "@/components/Header";

export default async function Home() {
  const session = getSession();

  if (!session || !session.successful) {
    return <LogInSection errorMessage={session?.message} />;
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-10 h-full overflow-auto">
        <AppList />
      </main>
    </>
  );
}
