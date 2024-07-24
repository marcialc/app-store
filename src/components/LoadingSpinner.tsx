type LoadingSpinnerProps = {
  size?: "xs" | "sm" | "md" | "lg";
};

const LoadingSpinner = ({ size = "md" }: LoadingSpinnerProps) => {
  const sizeClass = `loading loading-spinner loading-${size}`;
  return <span className={sizeClass}></span>;
};

export default LoadingSpinner;
