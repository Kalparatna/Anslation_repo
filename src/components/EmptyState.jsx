/**
 * Empty state component shown when no todos match current filter
 */
const EmptyState = ({ filter }) => {
  const emptyMessages = {
    all: {
      icon: '📝',
      title: 'No todos yet',
      message: 'Add your first todo above to get started!'
    },
    active: {
      icon: '🎉',
      title: 'All caught up!',
      message: 'No active todos. Great job!'
    },
    completed: {
      icon: '📋',
      title: 'No completed todos',
      message: 'Complete some todos to see them here.'
    }
  };

  const { icon, title, message } = emptyMessages[filter];

  return (
    <div className="text-center py-16 animate-fade-in">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;