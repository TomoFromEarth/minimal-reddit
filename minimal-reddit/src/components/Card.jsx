const Card = ({ className, children }) => {
  return <div className={`bg-slate-50 mb-4 rounded p-3 ${className}`}>{children}</div>;
};

export default Card;
