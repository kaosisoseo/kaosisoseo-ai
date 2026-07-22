type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-green-600 text-white hover:bg-green-700",

    secondary:
      "border border-gray-300 bg-white hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}