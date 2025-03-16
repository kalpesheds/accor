export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
    block.classList.add(`banner-${cols.length}-cols`);
    

    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const parentDiv = document.querySelector(".banner");
        const bannerImageDiv = document.createElement("div");
        bannerImageDiv.classList.add("bannerImageDiv");

        const bannerContentDiv = document.createElement("div");
        bannerContentDiv.classList.add("banner-content");
        const imageDiv = col.querySelector('picture');
        imageDiv.parentNode.className = 'banner-image';
        const bannerImage = parentDiv.querySelector("p.banner-image");
        if (bannerImage) {
            bannerImageDiv.appendChild(bannerImage);
        }
        while (parentDiv.firstChild) {
            if (parentDiv.firstChild !== bannerImageDiv) {
                bannerContentDiv.appendChild(parentDiv.firstChild);
            }
        }
                
        parentDiv.innerHTML = "";
        parentDiv.appendChild(bannerImageDiv);
        parentDiv.appendChild(bannerContentDiv);   
        block.append(parentDiv);    
      });
    })
  }
  
