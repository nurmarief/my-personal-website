"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Prop {
  imgUrl: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  LiveSiteUrl: string;
}

const ProjectCard: FC<Prop> = ({ 
  imgUrl, 
  title, 
  description, 
  techStack,
  repoUrl,
  LiveSiteUrl 
}) => {
  return (
    <div className="my-8 block lg:grid lg:grid-cols-12 gap-8">
      {/* Image */}
      <div className="relative col-span-6 h-48 w-full sm:w-1/2 lg:w-full">
        <Image src={`${imgUrl === "" ? "https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imgUrl}`} fill={true} alt="" className="object-cover"/>
      </div>
      <div className="col-span-6 space-y-2">
        {/* Title */}
        <h1 className="mb-4 mt-4 lg:mt-0 text-xl font-bold">{ title }</h1>
        {/* Description */}
        <p>{ description }</p>
        {/* Tech stack */}
        <ul className="flex flex-wrap gap-4">
          { techStack.map((tech, index) => (
            <li key={index} className="tech">{ tech }</li>
          ))}
        </ul>
        {/* Button */}
        <div className="flex flex-wrap gap-4">
          <Link href={repoUrl} target="_blank">Repository</Link>
          <Link href={LiveSiteUrl} target="_blank">Live Site</Link>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;