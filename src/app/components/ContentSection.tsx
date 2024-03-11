import { FC, ReactNode } from "react";

interface Prop {
  children: ReactNode,
  title:  string,
  id: string,
};

const ContentSection: FC<Prop> = ({ 
  title, 
  children, 
  id 
}) => {
  return (
    <section id={id}>
      <h1 className="sticky top-0 backdrop-blur-sm py-6 font-bold text-2xl z-50">{title}</h1>
      { children }
    </section>
  )
};

export default ContentSection;