import Link from 'next/link';
import React from 'react';
import style from './button.module.css';

interface Props {
  className?: string;
  href?: string;
  buttonTextColor?: 'text-[#1E293B]' | 'text-[#f9fafb]';
  buttonColor?:
    | 'text'
    | 'bg'
    | 'warning'
    | 'slate'
    | 'success'
    | 'error'
    | 'blue'
    | 'purple'
    | 'backgroundContent'
    | 'backgroundContent2';
  buttonType?: 'normal' | 'mini';
  iconColor?: 'text-text' | 'text-bg';
  onClick?: () => void;
  children: React.ReactNode;
}

const colorMap: { [key: string]: string } = {
  text: 'bg-[#1E293B]',
  bg: 'bg-[#f9fafb]',
  warning: 'bg-[#aa2629]',
  slate: 'bg-[#334155]',
  success: 'bg-[#3a9e45]',
  error: 'bg-[#8f2228]',
  blue: 'bg-[#0d9aea]',
  purple: 'bg-[#6236ff]',
  backgroundContent: 'backgroundContent', // Assuming these values for example
  backgroundContent2: 'backgroundContent2' // Assuming these values for example
};

function Button({
  className = '',
  href = '',
  buttonColor = 'backgroundContent',
  buttonType = 'normal',
  onClick,
  children
}: Props) {
  const buttonStyle = {
    backgroundColor: colorMap[buttonColor || 'slate'] // Apply background color
  };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: colorMap[buttonColor] }}
      className={`
      ${buttonStyle} 
      ${className}
      ${buttonType === 'normal' ? 'min-h-[42px] min-w-[90px] px-[8px]' : 'min-h-[32px] min-w-[70px]'} 
      flex cursor-pointer items-center justify-center gap-[4px] rounded transition-all hover:shadow active:translate-y-[1px] active:scale-[100.5%]`}
    >
      <Link href={href}>
        <div>{children}</div>
      </Link>
    </button>
  );
}

export default Button;
