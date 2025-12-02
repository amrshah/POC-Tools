export const Badge = ({ children, className = '' }) => {
    return (
        <span className={`inline-block px-2 py-0.5 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-[10px] font-semibold rounded-xl uppercase tracking-wide ml-2 ${className}`}>
            {children}
        </span>
    );
};
