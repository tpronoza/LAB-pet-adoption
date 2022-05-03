const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    typeOfPet: "cat",
    image: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    typeOfPet: "dino",
    image: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    typeOfPet: "dog",
    image: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    typeOfPet: "cat",
    image: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    typeOfPet: "dog",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    typeOfPet: "cat",
    image: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    typeOfPet: "cat",
    image: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    typeOfPet: "cat",
    image: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    typeOfPet: "dog",
    image: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    typeOfPet: "dog",
    image: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    typeOfPet: "cat",
    image: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    typeOfPet: "cat",
    image: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    typeOfPet: "cat",
    image: "https://swall.teahub.io/photos/small/216-2166558_funny-kitten-wallpaper-wallpaper-free-download-cute-kittens.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    typeOfPet: "dog",
    image: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    typeOfPet: "cat",
    image: "https://i.pinimg.com/564x/28/bb/ce/28bbce5c0fa2e6bc2b786937be1c2ed9.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    typeOfPet: "cat",
    image: "https://swall.teahub.io/photos/small/17-177357_collection-of-free-kitten-wallpaper-on-hdwallpapers-cute.jpg"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    typeOfPet: "dog",
    image: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    typeOfPet: "dog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSM86gFK5X9y-iriloLEzw-feL8-QB01JpOA&usqp=CAU"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    typeOfPet: "cat",
    image: "https://breakbrunch.com/wp-content/uploads/2019/06/cute-cat-with-big-eyes-041619-4.jpg"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    typeOfPet: "dog",
    image: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    typeOfPet: "dino",
    image: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    typeOfPet: "cat",
    image: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    typeOfPet: "cat",
    image: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    typeOfPet: "dino",
    image: "https://i.pinimg.com/474x/04/30/4b/04304b385421257ab7278c3afbf2cf62.jpg"
  }
];

const app = document.querySelector("#app");
let domString = "";

//Utility function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//cards on dom
const cardsOnDom = (cards) => {
  let domString = "";
  for (const pet of pets) {
      domString += 
      `<div class="card" style="width: 18rem;">
      <div id="name" class="card-header">${pet.name}</div>
      <button class="btn btn-danger text-end" id="delete--${pet.id}">x</button>
      <div class="card-body">
      <img src="${pet.image}" class="card-img-top" alt="pet photo">
      <p class="card-text">${pet.color}</p>
      </div>
      <p class="card-text">${pet.specialSkill}</p>
      <div id="type" class="card-footer ${pet.typeOfPet}-footer">${pet.typeOfPet}</div>
    </div>`;
  }
    renderToDom('#cardContainer', domString);
}

const addNewPet = () => {
  const newToDomString = `   
  <div class="modal fade" id="add-animal-modal" tabindex="-1" aria-labelledby="add-animal-modal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body">
        <form>
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="ID" id="id" aria-label="id" required>
          <label for="id">ID</label>
        </div>
    
        <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="text" placeholder="Name" id="name" aria-label="name" required>
          <label for="name">Name</label>
        </div>
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Color" id="color" aria-label="color" required>
        <label for="color">Color</label>
      </div>
      <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Special Skill" id="specialSkill" aria-label="specialSkill" required>
      <label for="specialSkill">Special Skill</label>
    </div>
    
        <div class="form-floating mb-3">
          <select class="form-select form-control-lg" id="typeOfPet" aria-label="typeOfPet" required>
            <option value="">Select a Type</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Dino">Dino</option>
          </select>
          <label for="typeOfPet">Type Of Pet</label>
        </div>
        
        <div class="form-floating mb-3">
        <input class="form-control form-control-lg" type="text" placeholder="Image URL" id="image" aria-label="image" required>
        <label for="image">Image URL</label>
      </div>
    
        <button 
          type="submit" 
          class="btn btn-success" 
        >
          Submit
        </button>
      </form>
        </div>
      </div>
    </div>
  </div>`
renderToDom("#addPetModal", newToDomString);
};

const filterButtons = () => {
  let domString =
  `<div class="d-flex flex-wrap justify-content-between my-3">
   <button id="cat-btn" class="btn btn-primary" type="button">Cats</button>
   <button id="dog-btn" class="btn btn-primary" type="button">Dogs</button>
   <button id="dino-btn" class="btn btn-primary" type="button">Dino</button>
    <button id="all-btn" class="btn btn-primary" type="button">All</button>
    <button id="add-btn" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#add-animal-modal">
    Add New
  </button>
  </div>`;
  renderToDom('#filterContainer', domString); 
}


//filter
const filter = (e) => {
  console.log("dog" === e.target.id)
  const result = filterText === "all" ? pets : pets.filter(pet => pet.type.toLowerCase() === filterText)
  const app = document.querySelector("#app");
  let domString = "";
    for (const pet of pets) {
      domString += 
      `<div class="card" style="width: 18rem;">
      <div id="name" class="card-header">${pet.name}</div>
      <button class="btn btn-dange text-end" id="delete--${pet.id}">x</button>
      <div class="card-body">
      <img src="${pet.image}" class="card-img-top" alt="pet photo">
      <p class="card-text">${pet.color}</p>
      </div>
      <p class="card-text">${pet.specialSkill}</p>
      <div id="type" class="card-footer ${pet.typeOfPet}-footer">${pet.typeOfPet}</div>
    </div>`;
    }
      renderToDom('#cardContainer', domString);
  
}

//filter

const eventListeners = () =>{
  const formModal = new bootstrap.Modal(document.querySelector('#add-animal-modal'));

  document.querySelector("#cat-btn").addEventListener("click", filter)
  document.querySelector("#dog-btn").addEventListener("click", filter)
  document.querySelector("#dino-btn").addEventListener("click", filter)
  document.querySelector("#all-btn").addEventListener("click", filter)
  

    // this goes in EVERY form submit to prevent page reload
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      const newObj = {
        id: document.querySelector("#id").value,
        name: document.querySelector("#name").value,
        color: document.querySelector("#color").value,
        specialSkill: document.querySelector("#specialSkill").value,
        type: document.querySelector("#typeOfPet").value,
        imageUrl: document.querySelector("#image").value,
      };
      console.log(newObj);
  
      // push that object to the data array    
      pets.push(newObj);
      cardsOnDom(pets);
  
      // Close modal and reset form
      formModal.hide() //closes the modal manually
      form.reset();
    });
   
};  


//delete function

document.querySelector("#cardContainer").addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [method, id] = e.target.id.split("--");
    const index = pets.findIndex(pet => pet.id === parseInt(id)); 
    pets.splice(index, 1);
    cardsOnDom(pets);
  }
})



function startApp () {
  addNewPet();
  filterButtons();
  cardsOnDom(pets);

  eventListeners();//always last
}

//starts app to use funtions above^^
startApp();
