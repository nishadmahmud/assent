export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-border card-hover group">
      <div className="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
        <div className="text-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3
        className="text-xl font-bold text-primary mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
