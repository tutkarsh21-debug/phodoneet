import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center h-[80vh] bg-slate-100">
        <div className="text-center">

          <h1 className="text-6xl font-bold text-blue-700">
            Welcome to PhodoNEET
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            India's Smartest NEET Online Test Platform
          </p>

          <button className="mt-10 rounded-xl bg-blue-700 px-8 py-4 text-white text-xl hover:bg-blue-800">
            Start Free Test
          </button>

        </div>
      </main>
    </>
  );
}