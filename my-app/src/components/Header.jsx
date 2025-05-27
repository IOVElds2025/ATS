export default function Header() {
    return (
      <header className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-6 py-4 bg-transparent text-white">
        <h1 className="text-2xl font-bold">YourCompany</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/Login" className="hover:underline">Login</a>
        </nav>
      </header>
    );
  }
  