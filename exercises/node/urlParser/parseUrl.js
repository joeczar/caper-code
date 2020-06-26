if (!process.argv[2]) {
    throw "please enter a url";
} else {
    const args = process.argv.slice(2)[0];
    var url = new URL(args);

    const parseStrings = [
        ["href", `The URL is ${url.href}`],
        ["protocol", `The protocol is ${url.protocol}`],
        ["host", `The hostname is ${url.hostname}`],
        ["hostname", `The hostname is ${url.hostname}`],
        ["port", `The port is ${url.port}`],
        ["pathname", `The Pathname is ${url.pathname}`],
        ["search", `The query is ${url.search}`],
        ["searchParams"],
    ];
    url.searchParams.forEach((value, name) => {
        url[name] = value;
        parseStrings.push([
            `${name}`,
            `The value of the ${name} parameter is ${value}`,
        ]);
    });
    const parseStringsMap = new Map(parseStrings);

    // console.log(parseStringsMap.entries());
    // I could have left it an array and gotten the same result.
    for (const [key, val] of parseStringsMap.entries()) {
        // console.log(key, val);
        if (typeof url[key] === "string") {
            console.log(val);
        }
    }
}
