export const addItem = (books, bookToAdd) => {
  const existing = books.find(book => book.id === bookToAdd.id);

  if (existing) {
    return books;
  }

  return [...books, bookToAdd];
};

export const updateItem = (books, bookToUpdate) => {
  var newStatus;
  // eslint-disable-next-line default-case
  switch (bookToUpdate.status) {
    case "pending":
      newStatus = "reading";
      break;
    case "reading":
      newStatus = "completed";
      break;
  }

  return books.map(book =>
    book.id === bookToUpdate.id ? { ...book, status: newStatus } : book
  );
};
