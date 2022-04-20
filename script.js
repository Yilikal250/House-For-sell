const houseProjects = [
    {
      url1: '/image/house1.jfif',
      h1: 'house-detail',
      h2: 'Details of the house',
      par: 'description of the hous what we have know',
  
  
    },
    {
        url1: '/image/house8.jpg',
        h1: 'house-detail',
        h2: 'Details of the house',
        par: 'description of the hous what we have know',
  
    },

    {
        url1: '/image/house6.jpeg',
        h1: 'house-detail',
        h2: 'Details of the house',
        par: 'description of the hous what we have know',
  
  
    },
    {
        url1: '/image/house11.jpg',
        h1: 'house-detail',
        h2: 'Details of the house',
        par: 'description of the hous what we have know',
  
  
    },
    {
        url1: '/image/house9.jpg',
        h1: 'house-detail',
        h2: 'Details of the house',
        par: 'description of the hous what we have know',
  
  
    },
    {
        url1: '/image/house12.jpeg',
        h1: 'house-detail',
        h2: 'Details of the house',
        par: 'description of the hous what we have know',
  
  
    },
  
  ];
  
  function renderCards(i) {
    const div = document.createElement('div');
    div.className = 'house-cards';
  
    div.innerHTML = `  <img class="house-img" src="${houseProjects[i].url1}" alt="">
    <div class="discribe">
     <h1>
     ${houseProjects[i].h1} 
     </h1>
     <h2>${houseProjects[i].h2}</h2>
     <hr>
     <p>${houseProjects[i].par}</p>
    </div>`;
    document.querySelector('.house-detais-conatiner').appendChild(div);
  }
  
  for (let i = 0; i < 6; i++) {
    renderCards(i);
  }