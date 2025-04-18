const blogs = [
  {
    imageUrl: "https://media.istockphoto.com/id/898665168/photo/basketball-players-playing-outdoors-on-court.jpg?s=612x612&w=0&k=20&c=xObvmzzbWQF1-mGFuQzsD46ivVLGRX83CFkPgezHxUQ=",
    topic: "Bond Tigers introduces youngblood to the team",
    description: "Once again more young stars appear in the court as they made their first debue against flames",
    date: "April 9, 2025",
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1444386651/photo/tired-depression-or-sad-basketball-player-with-training-gear-after-game-fail-mistake-or.jpg?s=612x612&w=0&k=20&c=mpIb-4ne6ada08qmQAh7AOuUecQ3Ci1sK0ZD6TTJTgI=",
    topic: "Sox gets ejected after a technical foul",
    description: "After getting fruastrated by what he is calling a bad call, he kicked the ball making that tec foul the fifth",
    date: "April 11, 2025",
  },
];

// Dynamically creating blog posts
function renderBlogs() {
  const blogContainer = document.getElementById("blogContainer");
  blogContainer.innerHTML = "";

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
}

document.addEventListener("DOMContentLoaded", renderBlogs);