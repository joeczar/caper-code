const express = require('express');
const projects = require('./projects/projectData.json');
const app = express();
const port = 8080;

const hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
const helpers = require('handlebars-helpers')();

// data
//const { getProjectObj } = require("./getProjects");

//const projects = getProjectObj("./projects");

app.use(express.static('./projects'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'My Portfolio',
        cohort: 'Caper',
        projects,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
    });
});

app.get('/projects/:project', (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find((item) => item.directory === project);

    if (!selectedProject) {
        res.render('404', {
            title: '404 not found',
        });
        // res.sendStatus(404);
    } else {
        res.render('description', {
            title: selectedProject.name,
            project: selectedProject,
            projects,
        });
    }
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
