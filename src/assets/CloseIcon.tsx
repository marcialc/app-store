type CloseIconProps = {
  size?: number;
  color?: string;
};

const CloseIcon = ({ size = 16, color = "currentColor" }: CloseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke={color}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default CloseIcon;
