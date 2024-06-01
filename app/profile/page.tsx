import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div>
      <Nav />
      <div className="flex flex-col">
        <p className="mx-auto my-8">Hey, {user.email}!</p>
        <p className="mx-auto mb-8">New features coming soon.</p>
      </div>
      <Footer />
    </div>
  ) : (
    <Link href="/login" className="btn">
      Login
    </Link>
  );
}
