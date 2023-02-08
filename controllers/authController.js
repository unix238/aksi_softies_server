class authController {
    async get(req, res){
        return req.json({message: 'Hello World!'})
    }
}
