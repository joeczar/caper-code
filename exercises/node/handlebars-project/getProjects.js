module.exports.getProjectObj = function (filepath) {
    const fs = require('fs');
    const path = require('path');

    const projectArr = [];

    const files = fs.readdirSync(filepath, { withFileTypes: true });

    files.forEach((file) => {
        const nextPath = filepath + '/' + file.name;
        const stat = fs.statSync(nextPath);
        if (stat.isDirectory()) {
            const files = fs.readdirSync(nextPath, { withFileTypes: true });
            const screenshot = files.filter(
                (file) => path.extname(file.name) === '.png'
            )[0];

            const obj = {
                name: parseProjectName(file.name),
                directory: file.name,
                img: {
                    name: parseProjectName(screenshot.name),
                    path: file.name + '/' + screenshot.name,
                },
            };
            projectArr.push(obj);
        }
    });

    function parseProjectName(name) {
        name = name.split('.')[0];
        return name
            .split('-')
            .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
            .join(' ');
    }

    fs.writeFile(
        './projects/projectData.json',
        JSON.stringify(projectArr, null, 4),
        function (err) {
            if (err) {
                return console.log(err);
            }
            // console.log('The file was saved!');
        }
    );

    // Or

    return projectArr;
};
