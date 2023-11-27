import React from "react";

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`max-w-7xl mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};
