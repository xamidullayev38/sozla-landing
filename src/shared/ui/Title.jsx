export default function Title({ children, className }) {
  return (
    <h1
      className={`
        font-semibold
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-tight md:leading-[1.2]
        
        text-gray-900 dark:text-gray-100
        
        ${className}
      `}
    >
      {children}
    </h1>
  );
}