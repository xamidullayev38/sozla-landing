// ProblemCard.jsx
export default function ProblemCard({ icon: Icon, title, text }) {
  return (
    <div
      className="
        group
        max-w-[302px]
        rounded-2xl
        bg-white dark:bg-gray-800
        p-6

        border border-gray-100 dark:border-gray-700

        shadow-sm
        transition-colors duration-300

        hover:bg-gray-50
        hover:border-gray-200

        dark:hover:bg-gray-800/90
        dark:hover:border-primary/40
        dark:hover:shadow-[0_8px_25px_rgba(108,194,74,0.08)]
      "
    >
      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-10 h-10 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>

      {/* Text */}
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}