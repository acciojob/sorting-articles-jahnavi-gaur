//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ul = document.querySelector('#band')

function removeArticles(str){
	const articles = ['a', 'an', 'the'];
  
	const words = str.split(' ');
  
    if (articles.includes(words[0].toLowerCase())) {
       words.shift(); // remove first word
    }
  
    return words.join(' ');
}

let sortedBands = bands.sort((a,b)=>{
	return removeArticles(a).localeCompare(removeArticles(b))
})

sortedBands.forEach((band)=>{
	let li = document.createElement('li')
	li.textContent = band
	ul.appendChild(li)
})