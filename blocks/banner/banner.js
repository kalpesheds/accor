export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`banner-${cols.length}-cols`);
  
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');          
            picWrapper.classList.add('pic-overlay');
            const bannerContent= document.createElement('div');
            if(picWrapper){
                bannerContent.classList.add('banner-content');
                picWrapper.parentNode.insertBefore(bannerContent,picWrapper.nextSibling);
            }
        }
      });
    });
  }
  