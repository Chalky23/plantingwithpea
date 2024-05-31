import Logo from "@/components/Logo";
import AuthButton from "@/components/AuthButton";

export default function Nav() {
  return (
    <div className="w-full">
      <nav className="w-full flex justify-center border-b h-40">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Logo />
          <div className="flex flex-col">
            <a href="/profile" className="btn my-2">
              Profile
            </a>
            <AuthButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
