export default function SubText({ children, className }) {
  return (
    <p
      className={`
        text-sm sm:text-base md:text-lg
        leading-relaxed md:leading-loose
        
        text-gray-600 dark:text-gray-400
        
        ${className}
      `}
    >
      {children}
    </p>
  );
}