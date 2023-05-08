

const generateCSS = () => {
  fs.writeFile("..\\Team-Profile-Generator\\dist\\style.css", css, (err) => err ? console.error(err) : console.log('CSS has been generated!'));
}

module.exports = generateCSS;