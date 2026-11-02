const flowerField=document.querySelector('.flower-fall');
    const flowerGlyphs=['✿','❀','✽'];
    for(let i=0;i<22;i++){
      const flower=document.createElement('span');
      flower.className='flower';
      flower.textContent=flowerGlyphs[i%flowerGlyphs.length];
      flower.style.left=`${Math.random()*100}%`;
      flower.style.animationDuration=`${12+Math.random()*16}s`;
      flower.style.animationDelay=`${-Math.random()*28}s`;
      flower.style.fontSize=`${12+Math.random()*13}px`;
      flower.style.setProperty('--sway',`${Math.random()*150-75}px`);
      flowerField.appendChild(flower);
    }
    const filters=document.querySelectorAll('.filter');
    const places=document.querySelectorAll('.place');
    filters.forEach(button=>button.addEventListener('click',()=>{
      filters.forEach(item=>item.classList.toggle('active',item===button));
      const selected=button.dataset.filter;
      places.forEach(place=>{place.hidden=selected!=='all'&&place.dataset.category!==selected;});
    }));
