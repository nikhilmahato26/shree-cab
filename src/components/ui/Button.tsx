import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  href,
  target,
  rel,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-sm px-3.5 py-2 gap-1.5',
    md: 'text-base px-5 py-2.5 gap-2',
    lg: 'text-base sm:text-lg px-6 py-3.5 gap-2.5 shadow-sm',
  }[size];

  const variantStyles = {
    primary:
      'bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 focus:ring-amber-500 font-semibold',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/20 focus:ring-slate-900 font-semibold',
    outline:
      'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-900 font-semibold',
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 focus:ring-emerald-500 font-semibold',
    call:
      'bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/20 focus:ring-slate-800 font-semibold',
    ghost:
      'text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-400',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${widthStyle} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        className={combinedClasses}
        aria-disabled={disabled}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
