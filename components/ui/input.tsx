import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'w-full bg-transparent text-on-surface placeholder-on-surface-variant/50 outline-none transition-colors duration-200',
  {
    variants: {
      variant: {
        apothecary:
          'border-b border-outline-variant focus:border-primary focus:ring-0 py-2',
        enclosed:
          'border border-outline-variant rounded-lg focus:border-primary focus:ring-0 focus:ring-primary/20 px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'apothecary',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, error, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block font-label-sm text-label-sm text-outline mb-2 uppercase tracking-widest">
          {label}
        </label>
      )}
      <input
        className={inputVariants({ variant, className })}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-error text-[12px] font-label-sm mt-1 uppercase tracking-widest">
          {error}
        </p>
      )}
    </div>
  )
);
Input.displayName = 'Input';

export { Input, inputVariants };
