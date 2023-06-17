
const libraryElementSong = document.querySelector('.libraryElementSong');
const libraryElementFavourite = document.querySelector('.libraryElementFavourite');

libraryElementSong.addEventListener("click", libraryElementSongClick);
libraryElementFavourite.addEventListener("click", libraryElementFavouriteClick);

function libraryElementSongClick(){
  libraryElementSong.classList.add('libraryElementClick');
  libraryElementFavourite.classList.remove('libraryElementClick');
  handleLibraryElementHover(libraryElementFavourite);
}

function libraryElementFavouriteClick(){
  libraryElementSong.classList.remove('defaultElementSong');
  libraryElementFavourite.classList.add('libraryElementClick');
  libraryElementSong.classList.remove('libraryElementClick');
  handleLibraryElementHover(libraryElementSong);
}

function handleLibraryElementHover(element){
  element.addEventListener('mouseenter',() => {
    element.classList.add('libraryHoverClass');
  })
  element.addEventListener('mouseleave', () => {
    element.classList.remove('libraryHoverClass')
  })
}
