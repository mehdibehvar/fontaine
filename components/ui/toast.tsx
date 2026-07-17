import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const toastVariants = cva(
  'flex items-center gap-4 p-4 rounded shadow-2xl animate-pulse-subtle',
  {
    variants: {
      variant: {
        success: 'bg-surface-container-high border-l-4 border-tertiary',
        info: 'bg-surface-container-high border-l-4 border-primary',
        error: 'bg-surface-container-high border-l-4 border-error',
        warning: 'bg-surface-container-high border-l-4 border-secondary',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClose?: () => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, icon, title, description, onClose, children, ...props }, ref) => (
    <div
      className={toastVariants({ variant, className })}
      ref={ref}
      role="alert"
      {...props}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex-grow">
        {title && <p className="font-label-md text-label-md text-on-surface">{title}</p>}
        {description && (
          <p className="text-[10px] text-outline mt-0.5">{description}</p>
        )}
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-outline hover:text-on-surface transition-colors"
          aria-label="Close toast"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      )}
    </div>
  )
);
Toast.displayName = 'Toast';

export { Toast, toastVariants };
