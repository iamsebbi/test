import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractiveHoverButton = ({
  children,
  className,
  dotClassName = "bg-primary",
  hoverTextClassName = "text-primary-foreground",
  ...props
}) => {
  return (
    <button
      className={cn(
        "group bg-transparent relative w-auto cursor-pointer overflow-hidden border p-2 px-6 text-center font-semibold transition-colors duration-300",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]",
            dotClassName,
          )}
        ></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className={cn(
          "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100",
          hoverTextClassName,
        )}
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
};

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  if (variant === "primary") {
    return (
      <InteractiveHoverButton
        onClick={onClick}
        className={className}
        {...props}
      >
        {children}
      </InteractiveHoverButton>
    );
  }

  const variants = {
    secondary:
      "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    outline:
      "bg-transparent border border-accent text-accent hover:bg-accent hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm md:text-base",
    lg: "px-12 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`font-bold transition-all duration-300 shadow-lg shadow-accent/10 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
