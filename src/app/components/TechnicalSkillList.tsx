import { FC } from "react";

interface Prop {
  skills: Array<string[]>
}

const TechnicalSkillList: FC<Prop> = ({ skills }) => {
  return (
    <ul className="my-4 flex flex-wrap gap-4">
      {skills.map((skillCategoryList, index) => (
        <ul key={index} className="pr-4 border-r-2 last:border-r-0 border-slate-100 flex flex-wrap gap-4">
          {skillCategoryList.map((skill, index) => (
            <li key={index} className="tech">{ skill }</li>
          ))}
        </ul>
      ))}
    </ul>
  )
}

export default TechnicalSkillList;