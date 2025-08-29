import { useTodos } from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
import TodoStats from './components/TodoStats';
import EmptyState from './components/EmptyState';

/**
 * Main Todo Application Component
 * Orchestrates all todo functionality and state management
 */
function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-2 animate-bounce-subtle">
            ✅ Todo List
          </h1>
          <p className="text-gray-600 text-lg">
            Stay organized and get things done!
          </p>
        </header>

        {/* Main Content */}
        <main className="glass-effect rounded-3xl p-8 shadow-2xl">
          {/* Add Todo Input */}
          <TodoInput onAddTodo={addTodo} />

          {/* Filter Buttons */}
          <FilterButtons filter={filter} onFilterChange={setFilter} />

          {/* Todo List */}
          <div className="min-h-[200px]">
            {todos.length === 0 ? (
              <EmptyState filter={filter} />
            ) : (
              <div className="space-y-0">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Statistics */}
          <TodoStats stats={stats} onClearCompleted={clearCompleted} />
        </main>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500">
          <p>Built with React, Vite & TailwindCSS</p>
          <p className="text-sm mt-2">Double-click to edit • Click circle to complete</p>
        </footer>
      </div>
    </div>
  );
}

export default App;