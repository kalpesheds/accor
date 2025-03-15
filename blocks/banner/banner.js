export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`banner-${cols.length}-cols`);
  
    // setup image columns
    const picWrapper = row.createElement('div');  
    picWrapper.className = 'pic-overlay'; 
    [...block.children].forEach((row) => {
        const content = document.createElement('div');           
            while (row.firstElementChild) content.append(row.firstElementChild);
                [...content.children].forEach((div) => {
                if (div.children.length === 1 && (div.querySelector('picture') || div.querySelector('p picture'))) div.className = 'banner-image';
                else div.className = 'banner-content';
                });
                picWrapper.append(content);
            // if(picWrapper){
            //     bannerContent.classList.add('banner-content');
            //     picWrapper.parentNode.insertBefore(bannerContent,picWrapper.nextSibling);
            // }
      });
  }
  