

// // <SLIDER>

// function callSlider(){
//     let position = 0;
//     const slidesToShow = 4;
//     const slidesToScroll = 1;
//     const btnNext = document.querySelector('.experiances__arrow-img');
//     const container = document.querySelector('.slider__container');
//     const track = document.querySelector('.slider__track');
//     const items = document.querySelectorAll('.experiances__item');
//     const itemsCount = items.length;
//     const itemWidth = container.clientWidth / slidesToShow ;
//     const movePosition = slidesToScroll * itemWidth;
    

//     items.forEach( (item) => {
//         item.style.minWidth = `${itemWidth}px`;
//     });

//     btnNext.addEventListener('click', () =>{
//         const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//         position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//         setPosition();
//         // checkBtns();
//         // console.log(btnNext);
//     });

//     const setPosition = () =>{
//         track.style.transform = `translateX(${position}px)`;
//     }

//     const checkBtns = () =>{
//         btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
//     }
// }






// callSlider();

// // </SLIDER>





// function countryLinkActive() {
//     const countryLinks = document.querySelectorAll('.experiances__country-link');
//     const activeElement = countryLinks[0];

//     countryLinks.forEach( item => {
//         item.addEventListener('click', () => {
//             item.classList.remove();
//             item.classList.add('experiances__country--active');
//             console.log(item);
//         });
//     });
// }

// countryLinkActive();

// $(document).ready(function() {
//     let position = 0;
//     const slidesToShow = 2;
//     const slidesToScroll = 2;
//     const container = $('.slider-container');
//     const track = $('.slider-track');
//     const item = $('.slider-item');
//     const btnPrev = $('.btn-prev');
//     const btnNext = $('.btn-next');
//     const itemsCount = item.length;
//     const itemWidth = container.width() / slidesToShow;
//     const movePosition = slidesToScroll * itemWidth;

//     item.each(function (index, item) {
//         $(item).css({
//             minWidth: itemWidth, 
//         });
//     })

//     btnNext.click(function(){
//         const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//         position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;


//         setPosition();
//         checkBtns();
//     });

//     btnPrev.click(function(){
//         const itemsLeft = Math.abs(position) / itemWidth;

//         position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//         setPosition();
//         checkBtns();
//     })

//     const setPosition = () => {
//         track.css({
//             transform: `translateX(${position}px)`
//         });
//     }

//     const checkBtns = () => {
//         // console.log(btnNext.prop('disabled', true ));
//         // console.log(btnPrev.prop('disabled', position === 0));
//         btnPrev.prop('disabled', position === 0);
//         btnNext.prop(
//             'disabled',
//              position <= -(itemsCount - slidesToShow) * itemWidth
//              );

//     };
//     checkBtns();
// });




// function countryLinkActive() {
//     const countryLinks = document.querySelectorAll('.experiances__country-link');
//     const activeElement = countryLinks[0];

//     countryLinks.forEach( item => {
//         item.addEventListener('click', () => {
//             item.classList.remove();
//             item.classList.add('experiances__country--active');
//             console.log(item);
//         });
//     });
// }

// countryLinkActive();

// // $(document).ready(function() {
//     let position = 0;
//     const slidesToShow = 2;
//     const slidesToScroll = 2;
//     const container = document.querySelector('.slider-container');
//     const track = document.querySelector('.slider-track');
//     // const item = document.querySelector('.slider-item');
//     const btnPrev = document.querySelector('.btn-prev');
//     const btnNext = document.querySelector('.btn-next');
//     const items = document.querySelectorAll('.slider-item');
//     const itemsCount = items.length;
//     const itemWidth = container.clientWidth / slidesToShow;
//     // const itemWidth = container.width() / slidesToShow;
//     const movePosition = slidesToScroll * itemWidth;

//     items.forEach( (item) => {
//         item.style.minWidth = `${itemWidth}px`;
//     })
//     // item.each(function (index, item) {
//     //     $(item).css({
//     //         minWidth: itemWidth, 
//     //     });
//     // })

//     btnNext.addEventListener('click', () => {
//         const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//             position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    
//             setPosition();
//             checkBtns();
//     });
//     // btnNext.click(function(){
//     //     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

//     //     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;


//     //     setPosition();
//     //     checkBtns();
//     // });

//     btnPrev.addEventListener('click', () =>{
//         const itemsLeft = Math.abs(position) / itemWidth;

//         position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//         setPosition();
//         checkBtns();
//     })
//     // btnPrev.click(function(){
//     //     const itemsLeft = Math.abs(position) / itemWidth;

//     //     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     //     setPosition();
//     //     checkBtns();
//     // })

//     const setPosition = () => {
//         track.style.transform = `translateX(${position}px)`;
//         // track.css({
//         //     transform: `translateX(${position}px)`
//         // });
//     }

//     const checkBtns = () => {
//         btnPrev.disabled = position === 0;
//         btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
//         // btnPrev.prop('disabled', position === 0);
//         // btnNext.prop(
//         //     'disabled',
//         //      position <= -(itemsCount - slidesToShow) * itemWidth
//         //      );

//     };
//     checkBtns();
// // });

