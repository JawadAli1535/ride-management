// export default function Button({ children, onClick, className }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all ${className}`}
//     >
//       {children}
//     </button>
//   );
// }

export default function Button({ children, className, disabled }) {
  return (
    <button
      type="submit"
      className={` text-white ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
