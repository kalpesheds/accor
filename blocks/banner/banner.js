export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`banner-${cols.length}-cols`);
  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
          const picWrapper = col.createElement('div');          
            picWrapper.classList.add('pic-overlay');
            const bannerContent= document.createElement('div');
            while (col.firstElementChild) bannerContent.append(row.firstElementChild);
                [...bannerContent.children].forEach((div) => {
                if (div.children.length === 1 && div.querySelector('picture')) div.className = 'banner-image';
                else div.className = 'banner-content';
                });
                picWrapper.append(li);
            // if(picWrapper){
            //     bannerContent.classList.add('banner-content');
            //     picWrapper.parentNode.insertBefore(bannerContent,picWrapper.nextSibling);
            // }
      });
    });
  }
  