export default function LegalsLayout({ children }) {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-background p-4">
      <div className="max-w-3xl">{children}</div>
    </div>
  );
}
