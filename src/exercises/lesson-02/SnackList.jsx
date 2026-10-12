function SnackList() {
  const mySnacks = [
    { id: 1, name: 'chips', favRank: 5 },
    { id: 2, name: 'popcorn', favRank: 4 },
    { id: 3, name: 'carrots', favRank: 3 },
    { id: 4, name: 'nuts', favRank: 2 },
    { id: 5, name: 'apple', favRank: 1 },
  ];
  const sortedByRank = [...mySnacks].toSorted((a, b) => a.favRank - b.favRank);

  return (
    <>
      <ol>
        {sortedByRank.map((snack) => (
          <li key={snack.id}>{snack.name}</li>
        ))}
      </ol>
    </>
  );
}

export default SnackList;
