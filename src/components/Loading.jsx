const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-slate-500 dark:text-slate-400">
      <svg
        className="animate-spin h-6 w-6 mb-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default Loading;
