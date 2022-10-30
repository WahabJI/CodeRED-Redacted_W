//gonna remove all of these awful any keywords later
export default function destinationAdd(req: any, res: any){
    const reqPayload = req?.body;
    console.log("Req Payload:", reqPayload);
    res.json({msg: "test"});

    return res.status(500).json({
        msg: "this needs to be a post request"
    })
}