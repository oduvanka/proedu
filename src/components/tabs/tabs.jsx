export const Tabs = ({ list, activeElId, onChangeActiveTab }) => {
  return (
    <div>
      {list.map(({ id, name }) => (
        <button
          key={id}
          disabled={id === activeElId}
          onClick={() => onChangeActiveTab(id)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
