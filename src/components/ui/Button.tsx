import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  const variantStyles = {
    primary: 'bg-[#D7263D] text-white hover:bg-[#c01c31]',
    secondary: 'bg-[#2E8B57] text-white hover:bg-[#267349]',
    outline:
    'bg-transparent border border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href && !disabled) {
    return (
      <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>);

  }
  if (to && !disabled) {
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>);

  }
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}>
      
      {children}
    </button>);

}