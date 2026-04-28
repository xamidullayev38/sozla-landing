export default function GlobTitle({ children, className = "" }) {
  return (
    <h2
      className={`
        font-semibold
        text-xl sm:text-2xl md:text-3xl
        leading-tight
        
        text-gray-900 dark:text-gray-100
        
        ${className}
      `}
    >
      {children}
    </h2>
  );
}