interface InputProps extends React.ComponentProps<'input'> {
  children?: React.ReactNode;
  className?: string;
}

export const Input = ({ ...props }: InputProps) => <input {...props} />;
