/**
 * Filter buttons component for switching between todo views
 * Shows All, Active, and Completed todos
 */
const FilterButtons = ({ filter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All', icon: '📝' },
    { key: 'active', label: 'Active', icon: '⏳' },
    { key: 'completed', label: 'Completed', icon: '✅' },
  ];

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(({ key, label, icon }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 ${
            filter === key
              ? 'bg-primary-500 text-white shadow-lg'
              : 'bg-white/60 text-gray-600 hover:bg-white/80 hover:text-gray-800'
          }`}
        >
          <span>{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;