// problem-1
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contest) => {
  // console.log(contest)
  ihtml = " "
  for (item in contest) {
    console.log(contest[item])
    ihtml += `
    <div class="card mx-2 my-3" style="width: 20rem; background-color:#d3cdcd;">
         <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">Status is ${contest[item].status} and site is ${contest[item].site}</p>
          <p class="card-text">In 24 Hours? ${contest[item].in_24_hours}</p>
          <p >${contest[item].start_time}</p>
          <p >${contest[item].end_time}</p>
          <a href="${contest[item].url}" class="btn btn-primary my-4">Visit Contest</a>
        </div>
      </div>

    
    `
  }
  cardContainer.innerHTML = ihtml
})



