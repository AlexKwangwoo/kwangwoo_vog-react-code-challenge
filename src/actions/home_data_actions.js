import { EDIT_POST, NEW_POST, TOTAL_DATA } from "./types";

export async function InitalHomeData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return {
    type: TOTAL_DATA,
    payload: data,
  };
}

export async function SearchById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return {
    type: TOTAL_DATA,
    payload: data,
  };
}

export async function PostHomeData(post) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: post.userId,
    }),
  });
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return {
    type: NEW_POST,
    payload: data,
  };
}

export async function EditHomeData(post) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    {
      method: "PUT",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: post.userId,
      }),
    }
  );
  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return {
    type: EDIT_POST,
    payload: data,
  };
}

export async function DeleteHomeData(idObject) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${idObject.id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
}
