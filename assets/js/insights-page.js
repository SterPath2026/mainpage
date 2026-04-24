document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("insights-list");
  if (!container || typeof insightsPosts === "undefined") return;

  const allPosts = [...insightsPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  let html = "";

  allPosts.forEach((post, index) => {
    const anchor = post.link.includes("#") ? post.link.split("#")[1] : "";

   html += `
  <article id="${anchor}">

    ${post.category ? `<p class="post-category">${post.category}</p>` : ""}

    <h2>${post.title}</h2>

   <p class="post-date">${post.date}</p>

    ${post.tags ? `
  <div class="post-tags">
    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join("")}
  </div>
` : ""}

    ${post.summary}

  </article>
`;

    if (index < allPosts.length - 1) {
      html += `<hr />`;
    }
  });

  container.innerHTML = html;
});