const stats = [
  { value: "14+", label: "Storeys Flagship Architecture" },
  { value: "100%", label: "Structural Compliance & Safety" },
  { value: "24/7", label: "Dedicated Property Management" },
  { value: "21+", label: "Secured Dedicated Parking Bays" },
];

export default function Stats() {
  return (
    <section className="bg-[#0B132B] py-16 px-6 border-y border-white/10">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-extrabold text-accent mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <p className="text-white/70 text-xs md:text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
