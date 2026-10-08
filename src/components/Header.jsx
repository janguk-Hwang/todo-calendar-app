import { Calendar, CheckSquare } from 'lucide-react'

export default function Header({ selectedDate, totalCount, completedCount, progressPercent }) {
  const formattedDate = (() => {
    try {
      const [y, m, d] = selectedDate.split('-').map(Number)
      const dateObj = new Date(y, m - 1, d)
      return dateObj.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
      })
    } catch {
      return selectedDate
    }
  })()

  return (
    <header className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-200/80 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-200">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              일정 관리 (Daily Schedule)
            </h1>
            <p className="text-xs text-indigo-600 font-semibold flex items-center gap-1 mt-0.5">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate} 일정
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold text-indigo-600">
            {progressPercent}%
          </div>
          <div className="text-xs text-slate-500 font-medium">달성률</div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-xs text-slate-500 mb-1.5 font-medium">
          <span>{formattedDate} 진행 상황</span>
          <span>{completedCount} / {totalCount} 완료</span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  )
}
