const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const generateHTML = require("./generateHTML");
const pdf = require('html-pdf');




function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

inquirer.prompt([
	{
		type    : 'input',
		message : "What is your github username?",
		name    : 'username'
	},
	{
		type    : 'list',
		message : "Please choose a color",
		choices : ["green", "blue", "pink", "red"],
		name    : 'colors'
	}
]).then(function({username, color}){
    const queryUrl = `https://api.github.com/users/${username}`;
    const favcolor = color;
    axios.get(queryUrl).then(function(response){
        
        const pic = response.data.avatar_url;
        console.log(pic);
        const userName = response.data.login;
        console.log(userName);
        const location = response.data.location;
        console.log(location);
        //map location//
        const map = `https://www.google.com/maps/search/?api=1&query=${location}`
        //map location//
        const profile = response.data.html_url;
        console.log(profile);
        const blog = response.data.blog;
        console.log(blog);
        const bio = response.data.bio;
        console.log(bio);
        const publicRepos = response.data.public_repos;
        console.log(publicRepos);
        const followers = response.data.followers;
        console.log(followers);
        const following = response.data.following;
        console.log(following);
        axios.get(`https://api.github.com/users/${username}/starred`).then(function(res){
            const stars = res.data[0].stargazers_count;
            console.log(stars);
            pdf.create(html.generateHTML(colorChoice, res, mapLink, stars)).toFile('./user.pdf', function (err) {
                if (err) return console.log(err);
            })
    })
   
})

})

