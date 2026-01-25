import { Education } from "../../app/data";

export default function EducationRecord({educations}: {educations: Education[]}) {
  return (
    <>
      {educations.map((edu, idx) => (
        <li key={idx} className="relative">
          <div className="flex justify-between items-start mb-1">
            <span className="text-lg font-semibold text-zinc-900">
              {edu.edu_name}
            </span>
            <span className="text-sm text-zinc-500 font-normal">
              {edu.edu_period}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-zinc-600">{edu.edu_role}</span>
            <span className="text-xs text-zinc-400">{edu.edu_location}</span>
          </div>
          {edu.edu_desc && (
            <p className="text-sm text-zinc-700 mt-1">{edu.edu_desc}</p>
          )}
        </li>
      ))}
    </>
  );
}
