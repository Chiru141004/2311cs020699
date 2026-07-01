const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "requests.log");

function requestLogger(req, res, next) {

    const startTime = Date.now();

    console.log("====================================");
    console.log("Incoming Request");
    console.log("Method :", req.method);
    console.log("URL    :", req.originalUrl);
    console.log("Time   :", new Date().toISOString());
    console.log("IP     :", req.ip);

    if (Object.keys(req.query).length) {
        console.log("Query  :", req.query);
    }

    if (Object.keys(req.body || {}).length) {
        console.log("Body   :", req.body);
    }

    res.on("finish", () => {

        const duration = Date.now() - startTime;

        const log = {
            timestamp: new Date().toISOString(),
            method: req.method,
            endpoint: req.originalUrl,
            status: res.statusCode,
            responseTime: `${duration} ms`,
            ip: req.ip,
        };

        console.log("Status :", res.statusCode);
        console.log("Time   :", duration + " ms");
        console.log("====================================");

        fs.appendFileSync(
            logFile,
            JSON.stringify(log) + "\n"
        );
    });

    next();
}

module.exports = requestLogger;