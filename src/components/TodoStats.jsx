/**
 * Statistics component showing todo counts and clear completed button
 */
const TodoStats = ({ stats, onClearCompleted }) => {
  return (
    <div className="glass-effect rounded-xl p-4 mt-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Total: {stats.total}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span>Active: {stats.active}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Completed: {stats.completed}</span>
          </div>
        </div>
        
        {stats.completed > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoStats;