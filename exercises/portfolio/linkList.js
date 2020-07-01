const fs = require('fs');

function linkList () {
    const path = __dirname + '/projects';
    const files = fs.readdirSync(path, { withFileTypes: true });
    const folders = files.filter(file => {
        const filePathName = `${path}/${file.name}`;
        const stat = fs.statSync(filePathName);
        return stat.isDirectory()
    })

    const links = folders.map(folder => {
        return `<a href="projects/${folder.name}/">${folder.name}</a>`
    })
    let list = '';
    links.forEach((link) => {
        const listLink = `<li>${link}</li>`;
        list += listLink;
    });
    const html = `
                <h1>Portfolio-lio-lio</h1>
                <div>
                    <ul>
                        ${list}
                    </ul>
                </di>
            `;

    return html
}
    
exports.linkList = linkList;