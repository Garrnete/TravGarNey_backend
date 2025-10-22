export const notFound = (req, res, next) => {
    res.status(404).json({ error: "Not Found" });
};

export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(res.statusCode === 200 ? 500 : res.statusCode)
        .json({ error: err.message || "Server Error" });
};
