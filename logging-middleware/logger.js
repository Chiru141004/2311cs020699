const requestLogger = (req, res, next) => {
    const start = Date.now();
    const { method, url, ip } = req;
    const timestamp = new Date().toISOString();

    res.on('finish', () => {
        const duration = Date.now() - start;
        const { statusCode } = res;

        const logData = {
            timestamp,
            method,
            url,
            statusCode,
            duration: `${duration}ms`,
            ip
        };

        if (statusCode >= 400) {
            console.error(`❌ [ERROR] ${JSON.stringify(logData)}`);
        } else {
            console.log(`ℹ️ [INFO] ${JSON.stringify(logData)}`);
        }
    });

    next();
};

module.exports = requestLogger;