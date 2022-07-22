const List = () => {
  const items = [
    {
      id: 1,
      name: "André",
    },
    {
      id: 2,
      name: "Jorge",
    },
    {
      id: 3,
      name: "Pedro",
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;
