import { WorkExp } from "../../app/data";

export default function WorkExpRecord({ workexps }: { workexps: WorkExp[] }) {
  return (
    <>
      {workexps.map((work, idx) => (
        <li key={idx} className="relative">
          <div className="flex justify-between items-start mb-1">
            <span className="var-h2">
              {work.work_title}
            </span>
            <span className="text-sm text-zinc-500 font-normal">
              {work.work_period}
            </span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-zinc-600">
              {work.work_company_name}
            </span>
            <span className="text-xs text-zinc-400">{work.work_location}</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-zinc-500">{work.work_method}</span>
          </div>
          {work.work_desc && (
            <p className="var-h5">{work.work_desc}</p>
          )}
        </li>
      ))}
    </>
  );
}
