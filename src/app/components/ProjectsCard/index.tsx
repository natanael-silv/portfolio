import Link from "next/link";
import React from "react";
import Image from "next/image";

interface ProjectsCardProps {
  title: string;
  description: string;
  src: string;
  imageSrc: string;
}
const ProjectsCard = ({
  title,
  description,
  src,
  imageSrc,
}: ProjectsCardProps) => {
  return (
    <Link href={src}>
      <div className="text-lg  outline outline-1 rounded-lg overflow-hidden h-[312px] max-w-[320px]">
        <div className="h-[180px] relative ">
          <Image src={imageSrc} fill alt="" />
        </div>
        <div className="px-4 py-4">
          <h3 className="font-semibold text-[#3c3c43] dark:text-white ">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
