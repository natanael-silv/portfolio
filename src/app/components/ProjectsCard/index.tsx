import Link from "next/link";
import React from "react";

interface ProjectsCardProps {
  title: string;
  description: string;
  src: string;
}
const ProjectsCard = ({ title, description, src }: ProjectsCardProps) => {
  return (
    <Link href={src}>
      <div className="text-lg p-5 outline outline-1 rounded-lg">
        <h3 className="font-semibold text-[#3c3c43] dark:text-white ">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectsCard;
