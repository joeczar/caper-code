const cp = require("child_process");

cp.exec("ls", function () {
    console.log(arguments);
});
