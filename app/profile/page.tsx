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
      <p>Hey, {user.email}!</p>
      <Footer />
    </div>
  ) : (
    <Link href="/login" className="btn">
      Login
    </Link>
  );
}
