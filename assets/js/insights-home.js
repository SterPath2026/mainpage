document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("insights-preview");
  if (!container || typeof insightsPosts === "undefined") return;

  const latestPosts = [...insightsPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  let html = "";

 latestPosts.forEach((post, index) => {
  html += `
    <article>

      ${post.category ? `<p class="post-category">${post.category}</p>` : ""}

      <h3>${post.title}</h3>

      <p class="post-date">${post.date}</p>

      ${post.tags ? `
        <div class="post-tags">
          ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join("")}
        </div>
      ` : ""}

      ${post.summary}

    </article>
  `;

  if (index < latestPosts.length - 1) {
    html += `<hr />`;
  }
});

  html += `
    <ul class="actions">
      <li><a href="insights.html" class="button">View All Updates</a></li>
    </ul>
  `;

  container.innerHTML = html;
});