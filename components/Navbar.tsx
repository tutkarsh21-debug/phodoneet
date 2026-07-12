export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold">
          Phodo<span className="text-yellow-300">NEET</span>
        </h1>

        <div className="space-x-8">

          <a href="#" className="hover:text-yellow-300">
            Home
          </a>

          <a href="#" className="hover:text-yellow-300">
            Mock Tests
          </a>

          <a href="#" className="hover:text-yellow-300">
            Login
          </a>

        </div>

      </div>
    </nav>
  );
}