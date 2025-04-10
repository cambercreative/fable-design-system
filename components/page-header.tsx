import { FC, ReactNode } from 'react';

interface PageHeaderProps {
  heading: string;
  subheading?: string;
  children?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ heading, subheading, children }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">{heading}</h1>
      {subheading && <p className="text-xl text-muted-foreground">{subheading}</p>}
      {children}
    </div>
  );
};