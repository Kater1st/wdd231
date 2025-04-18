// Dynamically creating blog posts
async function renderBlogs() {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

  try {
    // Fetch blog data from blog.json
    const response = await fetch("asserts/data/blog.json");
    const blogs = await response.json();

    // Render each blog post
    blogs.forEach((blog) => {
      const blogItem = `
        <div class="blog-item">
          <img src="${blog.imageUrl}" alt="${blog.topic}" class="blog-image" />
          <div class="blog-content">
            <p class="blog-date">${blog.date}</p>
            <h3 class="blog-title">${blog.topic}</h3>
            <p class="blog-description">${blog.description}</p>
            <a href="#" class="read-more">Read more</a>
          </div>
        </div>
      `;
      blogContainer.insertAdjacentHTML("beforeend", blogItem);
    });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    blogContainer.innerHTML = "<p>Failed to load blog posts. Please try again later.</p>";
  }
}

document.addEventListener("DOMContentLoaded", renderBlogs);