import {
  Brain,
  FileText,
  Trophy,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Performance Analysis",
    description:
      "Discover your weak topics and improve with personalized insights.",
  },
  {
    icon: FileText,
    title: "NTA Pattern Mock Tests",
    description:
      "Practice with real exam-level questions following the latest NEET pattern.",
  },
  {
    icon: Trophy,
    title: "All India Ranking",
    description:
      "Compete with students across India and track your rank.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description:
      "Analyze your accuracy, speed, strengths and weaknesses after every test.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-800">
            Why Choose PhodoNEET?
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Everything you need to crack NEET with confidence.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">

                  <Icon
                    size={34}
                    className="text-blue-700"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}