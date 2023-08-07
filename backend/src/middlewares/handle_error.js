export const badrequest = (err,req, res, next) => {
    console.log(err != null);
    res.status(500).json({
        status:"error",
        message: err.message
    })
}

export const notFound =  (req, res, next) => {
    console.log("res",res);
    res.status(404).json({
        status:"error",
        message: "something wrong or page doesnt exist"
    })
}