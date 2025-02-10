/**
 * Create a form to submit a blog to a mock API (reqres.in)
 */

const form = document.getElementById("blogForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;

  try {
    const response = await fetch("https://reqres.in/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    });

    if (response.ok) {
      const data = await response.json();
      responseMessage.innerHTML = `Blog submitted successfully! ID: ${data.id}`;
    } else {
      responseMessage.innerHTML = "Failed to submit blog.";
    }
  } catch (error) {
    responseMessage.innerHTML = "Error submitting blog.";
  }
});
