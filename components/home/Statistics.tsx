export default function Statistics() {
  const stats = [
    {
      number: "50,000+",
      title: "Questions",
    },
    {
      number: "500+",
      title: "Mock Tests",
    },
    {
      number: "20,000+",
      title: "Students",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border bg-slate-50 p-8 text-center shadow-sm transition hover:shadow-lg"
            >
              <h2 className="text-4xl font-bold text-blue-700">
                {stat.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}