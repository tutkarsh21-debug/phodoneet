import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    rank: "NEET AIR 1248",
    review:
      "PhodoNEET helped me improve my Biology score with detailed AI analysis and realistic mock tests.",
  },
  {
    name: "Priya Singh",
    rank: "MBBS Student",
    review:
      "The NTA-pattern tests and performance reports boosted my confidence before the exam.",
  },
  {
    name: "Aman Verma",
    rank: "NEET Qualified",
    review:
      "The question quality and detailed reports were better than many paid platforms.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Success Stories
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Thousands of students trust PhodoNEET.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((student) => (
            <div
              key={student.name}
              className="rounded-2xl bg-slate-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic">
                "{student.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-800">
                  {student.name}
                </h3>

                <p className="text-blue-700">
                  {student.rank}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}