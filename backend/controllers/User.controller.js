export const userLogin = async(req,res)=>{
   
    try{
        const {email, password} = req.body

        if(!email && !password){
            return res.status(400).json({message:"All fields are required"})
        }
        if(email !== "arpit@abc.com" || password !== "Simple@123"){
            return res.status(400).json({ "message": "Login email & password doesn't match"})

        }
        res.status(200).json({"message":"login succesfully" })
        
    }catch(error){
        console.log(error)
    }

}