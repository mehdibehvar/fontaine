import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-[10px] font-bold uppercase rounded-full transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-background shadow-lg shadow-primary/20',
        secondary:
          'bg-surface-container text-on-surface-variant border border-outline-variant/30 hover:bg-primary/20 hover:text-primary',
        success: 'bg-tertiary/10 text-tertiary border border-tertiary/30',
        warning: 'bg-secondary/10 text-secondary border border-secondary/30',
        error: 'bg-error/10 text-error border border-error/30',
        outline: 'border border-primary text-primary',
      },
      size: {
        sm: 'px-2 py-0.5 text-[8px]',
        md: 'px-3 py-1',
        lg: 'px-4 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      className={badgeVariants({ variant, size, className })}
      ref={ref}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
