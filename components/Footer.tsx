export default function Nav() {
  return (
    <footer className="w-full border-t py-6 flex justify-center text-center text-xs">
      <div>
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
      </div>
    </footer>
  );
}
