import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-widest transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-background hover:bg-primary-fixed active:scale-95 shadow-lg shadow-primary/10',
        secondary:
          'border border-primary text-primary hover:bg-primary/10 active:scale-95',
        tertiary: 'text-primary border-b border-primary/20 pb-1 hover:border-primary',
        ghost: 'text-on-surface hover:text-primary',
        destructive: 'bg-error text-on-error hover:bg-error/90',
      },
      size: {
        sm: 'px-4 py-2 text-[12px]',
        md: 'px-6 py-2.5',
        lg: 'px-8 py-3',
        xl: 'px-10 py-4 text-[16px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
