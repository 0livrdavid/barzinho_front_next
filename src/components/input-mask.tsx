import * as React from "react"

import { cn } from "@/lib/utils"
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, mask, ...props }, ref) => {
    const handleInputRef = (instance: HTMLInputElement | null) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref && instance) {
        ref.current = instance;
      }
    };

    return (
      <InputMask
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        mask={mask}
        inputRef={handleInputRef}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
