const chevronPaths = ["M4 4 L12 11 L20 4", "M4 10 L12 17 L20 10", "M4 16 L12 23 L20 16"];

export const ScrollIndicator = () => {
  return (
    <svg
      className="text-white drop-shadow-md"
      width={64}
      height={64}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {chevronPaths.map((d, i) => (
        <path
          key={d}
          stroke="currentColor"
          fill="none"
          d={d}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="animate-blink motion-reduce:animate-none"
          style={{
            animationDelay: `${200 * i}ms`,
          }}
        />
      ))}
    </svg>
  );
};
