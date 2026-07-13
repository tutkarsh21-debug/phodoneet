type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 flex items-center justify-center p-6">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center bg-blue-700 p-12 text-white">
          <h1 className="text-5xl font-bold">
            Phodo<span className="text-yellow-300">NEET</span>
          </h1>

          <h2 className="mt-10 text-4xl font-bold">
            {title}
          </h2>

          <p className="mt-4 text-blue-100">
            {subtitle}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

      </div>
    </main>
  );
}