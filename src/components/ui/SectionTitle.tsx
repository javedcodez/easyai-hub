interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold gradient-text">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 max-w-2xl text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}