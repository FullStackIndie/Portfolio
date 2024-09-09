$(function () {
  fetch("//blog.fullstackindie.net/GetTopXPosts/3")
    .then((response) => response.json())
    .then(function (data) {
      let blogUrl = "https://blog.fullstackindie.net/BlogPosts/Details/";

      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      if (data !== null || data !== undefined) {
        document.getElementById("blog-posts").style.display = "block";
      }
      console.log(data[0]);
      let blogLink = `${blogUrl}${data[0].slug}`;
      var blogPosts = document.getElementById("blog-posts");
      data.forEach(function (post) {
        var postCard = `<div class="card m-lg-3" style="width: 18rem;">
                        <a href="${blogUrl}${post.slug}" target="_blank">
                        <img class="card-img-top" src="data:${
                          post.contentType
                        };base64,${post.imageData}" alt="Card image cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.abstract}</p>
                            <a target="_blank" href="${blogUrl}${
          post.slug
        }" class="btn btn-light">Check it out</a>
                        </div>
                        <div class="card-footer text-muted">
                            Created: ${new Date(
                              post.created
                            ).toLocaleDateString("en-US", options)}
                        </div>
                    </div>
                `;
        blogPosts.insertAdjacentHTML("beforeend", postCard);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
