'use client';
import { useEffect } from 'react';
import { Z_INDEX, UI } from '../../constants';

export default function Modal({
  isOpen,
  onClose,
  children,
  className
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[${Z_INDEX.MODAL}] flex items-center justify-center bg-black/50 backdrop-blur-sm ${className}`}
      onClick={onClose}
    >
      <div
        className={`relative h-full max-h-[${UI.MODAL_MAX_HEIGHT}] w-[95vw] max-w-${UI.MODAL_MAX_WIDTH} overflow-y-auto rounded bg-white p-6 shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
