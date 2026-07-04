const stats = [
  {
    value: "250+",
    label: "Premium Prompts",
  },
  {
    value: "50+",
    label: "Free AI Tools",
  },
  {
    value: "100%",
    label: "Beginner Friendly",
  },
  {
    value: "24/7",
    label: "Always Available",
  },
];

export default function Stats() {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="glass glow rounded-2xl p-6 text-center"
        >
          <h3 className="text-3xl font-bold gradient-text">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </section>
  );
}