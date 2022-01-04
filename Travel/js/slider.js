


// <SLIDER>

function callSlider(){
    const rowGap = 30;
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 2;
    const btnNext = document.querySelector('.experiances__arrow-img');
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const items = document.querySelectorAll('.experiances__item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow ;
    const movePosition = slidesToScroll * (itemWidth + rowGap);
    
    items.forEach( (item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () =>{

      

        const itemsLeft = itemsCount - Math.floor((Math.abs(position) + slidesToShow * itemWidth) / itemWidth);


        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + rowGap);
        
        if(itemsLeft <= 0) {
            position = 0;
        }

        setPosition();
        
        console.log(itemsLeft);
        // checkBtns();
        // console.log(btnNext);
    });

    const setPosition = () =>{
        track.style.transform = `translateX(${position}px)`;
    }
    
    const checkBtns = () =>{
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }
}






callSlider();

// </SLIDER>