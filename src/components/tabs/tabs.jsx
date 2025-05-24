export const Tabs = ({ list, activeElId, onChangeActiveTab }) => {
  const handleClick = (id) => (e) => {
    onChangeActiveTab(id);
  };

  return (
    <div>
      {list.map(({ id, name }) => (
        <button key={id} disabled={id === activeElId} onClick={handleClick(id)}>
          {name}
        </button>
      ))}
    </div>
  );
};
