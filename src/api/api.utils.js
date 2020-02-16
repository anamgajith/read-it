import { setUserName } from "../redux/user/user.action";

const baseUrl = "http://localhost:8086/api";

export const addUser = async user => {
  await fetch(`${baseUrl}/${user.uid}/update`, {
    method: "PUT",
    body: JSON.stringify({
      _id: user.uid
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};

export const getBooks = async user => {
  const response = await fetch(`${baseUrl}/${user.uid}/get`);
  const json = await response.json();
  return json.books || [];
};

export const updateBooks = async (user, books) => {
  await fetch(`${baseUrl}/${user.uid}/update`, {
    method: "PUT",
    body: JSON.stringify({
      books: books
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
