import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',   // ✅ Default value, not type
  size = 'md',          // ✅ Default value, not type
  className,            // ✅ No type annotation here
  children,             // ✅ No type annotation here
  disabled = false,     // ✅ Default value
  onClick,              // ✅ No type annotation here
  type = 'button',      // ✅ Default value
  ...props             // ✅ Spread remaining props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // Base styles
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        
        // Variants
        {
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500': 
            variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500': 
            variant === 'secondary',
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500': 
            variant === 'danger',
        },
        
        // Sizes
        {
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
        },
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;