export default function SectionHeader({ title, text, style }) {
  return (
    <div className={`text-center space-y-2 ${style}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-primary-500 font-medium">{text}</p>
    </div>
  );
}