let movies = [

    {
  
      name: "falcon and the winter soldier",
  
      des:
  
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
  
      image: "slider2.png"
  
    },
  
    {
  
      name: "loki",
  
      des:
  
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
  
      image: "slider1.png"
  
    },
  
    {
  
      name: "wanda vision",
  
      des:
  
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
  
      image: "slider3.png"
  
    },
  
    {
  
      name: "raya and the last dragon",
  
      des:
  
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
  
      image: "slider4.png"
  
    },
  
    {
  
      name: "luca",
  
      des:
  
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officia adipisci autem mollitia quidem totam.",
  
      image: "slider5.png"
  
    }
  
  ];

  const carousel=document.querySelector('.carousel');
  let sliders=[];
  let slideIndex=0;
  const createSlide = () => { 
   if (slideIndex >= movies.length){
    slideIndex=0;
   }
  

  let slide=document.createElement('div');
  var imgElement=document.createElement('img');
  let content=document.createElement('div');
  let h1=document.createElement('h1');
  let p=document.createElement('p');

  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  
  //setting images 
  imgElement.src=movies[slideIndex].image;
  slideIndex++

  //setting element classnames
  slide.className="slider";
  content.className="slider-content";
  h1.className="movie-title";
  p.className="movie-desc";
  sliders.push(slide);

  if(sliders.length){
  sliders[0].style.marginLeft=`calc(-${100 * (sliders.length-2)}% - ${
    30*(sliders.length-2)
  }px)`; 
  }
}

for (let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();

},3000);
