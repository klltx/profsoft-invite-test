const fn = async () => {
  try {
    let result;

    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Example title",
        body: "Example body",
        userId: 34577,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        result = json;
      });

    console.log(result);
  } catch (err) {
    console.log("Error: " + err);
  }
};

fn();
