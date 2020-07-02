const cluster = require("cluster");
const os = require("os");

const numCpus = os.cpus().length;

console.log(os.cpus());

cluster.setupMaster({
    exec: `${__dirname}/index.js`,
});
for (let i = 0; i < numCpus; i++) {
    cluster.fork();
}
cluster.on("exit", function (worker) {
    console.log(worker.process.pid + " bit the dust");
    cluster.fork();
});
