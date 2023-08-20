// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");


let PitchesData = []


fetchPitchesData()


function fetchPitchesData() {
  fetch(`${pitchURL}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      PitchesData = data;
      renderData(data)
    })
    .catch((err) => {
      console.log(err)
    })
}





function renderData(data) {

  mainSection.innerHTML = ''

  const cards = data.map((ele) => {
    return getCard(ele)
  }).join('')


  mainSection.innerHTML = cards;


  let deletebtn = document.querySelectorAll('.card-button');

  for (let i of deletebtn) {

    i.addEventListener("click", () => {
      let id = i.getAttribute('data-id')
      RemovePitches(id)
    })

  }


  let editlinks = document.querySelectorAll('.card-link')

  for (let i of editlinks) {
    i.addEventListener("click", (e) => {
      e.preventDefault()
      let id = i.getAttribute('data-id')
      populateFeilds(id)
    })
  }


}



function getCard(ele) {

  return `<div class="card-list">

            <div class="card" data-id="${ele.id}">

              <div class="card-img">

                <img src="${ele.image}" alt="pitch">

              </div>
                
              <div class="card-body">

                <h4 class="card-title">${ele.title}</h4>
                <p class="card-founder">${ele.founder}</p>
                <p class="card-category">${ele.category}</p>
                <p class="card-price">${ele.price}</p>
                <a href="#" class="card-link" data-id="${ele.id}">Edit</a>
                <button class="card-button" data-id="${ele.id}">Delete</button>

              </div>

            </div>

          </div>
  
  `

}


pitchCreateBtn.addEventListener("click", () => {


  const newdata = {

    "title": pitchTitleInput.value,
    "price": pitchPriceInput.value,
    "founder": pitchfounderInput.value,
    "category": pitchCategoryInput.value,
    "image": pitchImageInput.value

  }

  console.log(newdata)

  addNewPitchesData(newdata)


})









function addNewPitchesData(d) {
  fetch(`${pitchURL}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(d)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchPitchesData()
    })
    .catch((err) => {
      console.log(err)
    })
}




function RemovePitches(id) {
  fetch(`${pitchURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchPitchesData()
    })
    .catch((err) => {
      console.log(err)
    })
}




function populateFeilds(id) {
  fetch(`${pitchURL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("-->", data)
      RenderFeilds(data)
    })
    .catch((err) => {
      console.log(err)
    })
}




function RenderFeilds(data) {

  updatePitchIdInput.value = data.id
  updatePitchTitleInput.value = data.title
  updatePitchImageInput.value = data.image
  updatePitchfounderInput.value = data.founder
  updatePitchCategoryInput.value = data.category
  updatePitchPriceInput.value = data.price

  updatePricePitchId.value = data.id
  updatePricePitchPrice.value = data.price


  updatePitchBtn.addEventListener("click", () => {
    const newdata = {

      "id": updatePitchIdInput.value,
      "title": updatePitchTitleInput.value,
      "price": updatePitchPriceInput.value,
      "founder": updatePitchfounderInput.value,
      "category": updatePitchCategoryInput.value,
      "image": updatePitchImageInput.value

    }

    UpdatePitches(newdata, data.id)


  })


  updatePricePitchPriceButton.addEventListener("click", () => {

    const data = {
      "id": updatePricePitchId.value,
      "price": updatePricePitchPrice.value,
    }

    UpdatePitches(data, data.id)
  })


}





function UpdatePitches(data, id) {
  fetch(`${pitchURL}/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchPitchesData()
    })
    .catch((err) => {
      console.log(err)
    })
}






function UpdatePriceOnly(data, id) {
  fetch(`${pitchURL}/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      fetchPitchesData()
    })
    .catch((err) => {
      console.log(err)
    })
}



sortAtoZBtn.addEventListener("click", () => {

  PitchesData.sort((a, b) => a.price - b.price)

  renderData(PitchesData)

})

sortZtoABtn.addEventListener("click", () => {

  PitchesData.sort((a, b) => b.price - a.price)

  renderData(PitchesData)

})


filterFood.addEventListener("click", () => {
  const data = PitchesData.filter((ele) => {
    return ele.category === 'Food'
  })
  renderData(data)
})



filterElectronics.addEventListener("click", () => {
  const data = PitchesData.filter((ele) => {
    return ele.category === 'Electronics'
  })
  renderData(data)
})


filterPersonalCare.addEventListener("click", () => {
  const data = PitchesData.filter((ele) => {
    return ele.category === 'Personal Care'
  })
  renderData(data)
})




searchBySelect.addEventListener("change" ,()=>{

  let filselval = searchBySelect.value

  console.log('working--1',filselval)

  searchByButton.addEventListener("click", () => {
  
    let searchboxval = searchByInput.value
  
    console.log('working--2')
  
    if (filselval === 'title') {
  
      console.log('working--3',filselval)
  
      if (searchboxval) {

        console.log('working--4',searchboxval)

        const data = PitchesData.filter((ele) => {
          if (ele.title.toLowerCase().includes(searchboxval.toLowerCase())) {
            return ele
          }
        })
        renderData(data)
      }
  
    }
  
    else if (filselval === 'founder') {
      if (searchboxval) {
        const data = PitchesData.filter((ele) => {
          if (ele.founder.toLowerCase().includes(searchboxval.toLowerCase())) {
            return ele
          }
        })
        renderData(data)
      }
    }
  
  
  
  })


})


