const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main-nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show-nav");
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95a789d48amsh5a23cef96fb2e06p1627f0jsn206bb0b5cef5',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        list.map( (item) => {
            const name= item.l ;
            const poster= item.i.imageUrl;
            const enter = `<div> <img src="${poster}"> <h2>${name}</h2></div>`;
            document.querySelector('.movie').innerHTML +=enter;
        })
    })
	.catch(err => console.log(err));


//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '95a789d48amsh5a23cef96fb2e06p1627f0jsn206bb0b5cef5',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
	
