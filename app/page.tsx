import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          some text here once logged in
        </main>
      </div>

      <footer className="w-full border-t py-6 flex justify-center text-center text-xs">
        <p>
          Created by Jack White <br />
          <div className="flex flex-row justify-evenly">
            <a
              href="https://github.com/Chalky23"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/white-jack"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </p>
      </footer>
    </div>
  );
}
