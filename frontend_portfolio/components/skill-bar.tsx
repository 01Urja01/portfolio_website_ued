interface SkillBarProps {
  skill: string
  percentage: number
}

export default function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-white font-medium">{skill}</span>
        <span className="text-gray-500 dark:text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div className="bg-accent h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
