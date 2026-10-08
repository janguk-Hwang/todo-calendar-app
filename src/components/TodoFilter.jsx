import { Search } from 'lucide-react'

export default function TodoFilter({
  filter,
  onFilterChange,
  search,
  onSearchChange,
  counts,
}) {
  return (
    <section className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 mb-4 space-y-3">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onFilterChange('all')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            전체 ({counts.total})
          </button>
          <button
            type="button"
            onClick={() => onFilterChange('active')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === 'active'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            진행 중 ({counts.active})
          </button>
          <button
            type="button"
            onClick={() => onFilterChange('completed')}
            className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              filter === 'completed'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            완료 ({counts.completed})
          </button>
        </div>

        <div className="relative w-full sm:w-48">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="검색..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
      </div>
    </section>
  )
}
