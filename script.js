(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {

    answer.innerHTML = '<div class="loading">Loading...</div>';

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        const titles = array.map(item => item.title);
        let htmlContent = '<ul class="posts-list">';
        titles.forEach(title => {
          htmlContent += `<li>${title}</li>`;
        });
        htmlContent += '</ul>';
        
        answer.innerHTML = htmlContent;
        return fetch('https://jsonplaceholder.typicode.com/posts/4')
            .then(response => response.json())
            .then(item => {
            let postContent = '<h2>'+item.id+'. '+item.title+'</h2>';
            postContent += '<p>'+item.body+'</p>';
            postContent += '<p>User ID: '+item.userId+'</p>'

            answer.innerHTML = htmlContent + postContent;
        })
        
      })

    
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
