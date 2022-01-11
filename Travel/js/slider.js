


// <SLIDER>

function callSlider(){
    let rowGap = 30;
    let position = 0;
    const container = document.querySelector('.slider__container');
    let slidesToShow = 4;
    let slidesToScroll = 2;

    if(container.clientWidth < 769) {
        slidesToShow = 2;
        slidesToScroll = 1;
        rowGap = 15;
   }
    if(container.clientWidth < 460) {
        slidesToShow = 1;
        slidesToScroll = 1;
        rowGap = 15;
   }
   
    const btnNext = document.querySelector('.experiances__arrow-img');
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

    // function sliderAutoScroll(ms) {
    //     let key = setInterval(setPosition, ms);
    // }
    // sliderAutoScroll(5000);

    function setSliderAutoScroll(ms) {
        let key = setInterval(() => {

            const itemsLeft = itemsCount - Math.floor((Math.abs(position) + slidesToShow * itemWidth) / itemWidth);
    
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + rowGap);
            
            if(itemsLeft <= 0) {
                position = 0;
            }
    
            setPosition();
    
            console.log(itemsLeft);
        }, ms);
    }
    
    setSliderAutoScroll(5000);
}

callSlider();

function callCustomersSlider(){
    const rowGap = 30;
    let position = 0;
    const slidesToShow = 2;
    const slidesToScroll = 1;
    const btnNext = document.querySelector('.customers__btn-next');
    const btnNextCustomers = document.querySelector('.customers__btn-next');
    // const btnPrev = document.querySelector('.experiances__arrow-img');
    const container = document.querySelector('.customers__row-inner');
    const track = document.querySelector('.customers__row');
    const items = document.querySelectorAll('.customers__item');
    const itemsCount = items.length;
    const itemWidth = (container.clientWidth - rowGap) / slidesToShow ;
    const movePosition = slidesToScroll * itemWidth;
    // let countOfPageIndex = 
    
    items.forEach( (item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () =>{

        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        
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

    function setSliderAutoScroll(ms) {
        let key = setInterval(() => {

            const itemsLeft = itemsCount - Math.floor((Math.abs(position) + slidesToShow * itemWidth) / itemWidth);
    
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * (itemWidth + rowGap);
            
            if(itemsLeft <= 0) {
                position = 0;
            }
    
            setPosition();
            setIndex();

            console.log(itemsLeft);
        }, ms);

        
    }
    
    // let setActiveCounter = 0;

    function setActivePageIndex() {
       const sliderItemIndex = document.querySelectorAll('.customers__page-index-item');
       let counter = slidesToShow -1;
       sliderItemIndex[counter].classList.add('customers__page-index-item--active');


       return function() {
           sliderItemIndex[counter].classList.remove('customers__page-index-item--active');
           counter += slidesToScroll;

           if(counter < sliderItemIndex.length) {
               sliderItemIndex[counter].classList.add('customers__page-index-item--active');
           } else {
               counter = slidesToShow - 1;
               sliderItemIndex[counter].classList.add('customers__page-index-item--active');
           }
           return counter;
       }

    }

    btnNextCustomers.addEventListener('click', () =>{
        setIndex();
    });
    
    // function setActivePageIndex() {
    //     const sliderItemIndex = document.querySelectorAll('.customers__page-index-item');
    //     let counter = 0;

    //     btnNextCustomers.addEventListener('click', ()=> {
    //         counter += slidesToScroll;

    //         if(counter < sliderItemIndex.length) {
    //             sliderItemIndex[counter].classList.add('customers__page-index-item--active');
    //             console.log(sliderItemIndex[counter]);
    //         } else {
    //             counter = 0;
    //             console.log(sliderItemIndex[counter++]);
    //         }
    //     });
    // }

    // setSliderAutoScroll(5000);
    let setIndex = setActivePageIndex();

}

callCustomersSlider();
// </SLIDER>