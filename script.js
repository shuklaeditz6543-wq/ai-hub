console.log("🤖 Welcome to AI Hub");

// Explore Button
const button = document.getElementById("exploreBtn");

if (button) {
  button.addEventListener("click", function () {
    document.querySelector(".features").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// Search Function
const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();
    const cards = document.querySelectorAll(".tool-card");

    cards.forEach((card) => {
      if (card.innerText.toLowerCase().includes(value)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
const filterBtns = document.querySelectorAll(".filter-btn");
const toolCards = document.querySelectorAll(".tool-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    toolCards.forEach(card => {

      if (
        filter === "all" ||
        card.innerText.toLowerCase().includes(filter)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});
const favBtns = document.querySelectorAll(".fav-btn");

favBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        if(btn.classList.contains("active")){
            btn.innerHTML = "❤️ Favorited";
        }else{
            btn.innerHTML = "🤍 Favorite";
        }

    });
});
const searchInput = document.getElementById("searchInput");

if(searchInput){
    searchInput.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".tool-card");

        cards.forEach(card=>{

            let text = card.innerText.toLowerCase();

            if(text.includes(value)){
                card.style.display="block";
            }else{
                card.style.display="none";
            }

        });

    });
}
function filterTools(category){

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card=>{

        if(category==="all"){
            card.style.display="block";
        }
        else if(card.classList.contains(category)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}