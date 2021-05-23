// Start

// Code injected for typed.js

var typed = new Typed('#animate', {
    strings: ["Front-End Web Developer", "Programmer", "Pythonista", "JavaScript Lover", "Sketch Artist", ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// DOM Manipulation

// Skills Section Manipulation

let skills = document.querySelector('.skills-pictures')

let pictureArray = ['https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white',
    'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white'
]

function name(pictureArray) {
    for (picture of pictureArray) {
        let picDiv = document.createElement('div');
        picDiv.className = "py-2 py-sm-4 col-md-4 col-12";
        let picImg = document.createElement('img');
        picImg.setAttribute('href', picture);
        picDiv.appendChild(picImg);
    }
}

// End