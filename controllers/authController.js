const Users = require( '../models').Users

const login = async(req, res, next) =>{
    const {phoneNumber, password} = req.body;
    console.log(phoneNumber)
    if (!phoneNumber || !password) {
        return res.status(400).json({
            message: 'Enter all details'
        })
    }

    const result = await Users.findOne({where: {phoneNumber}});
    if(!result || (password != result.password)){
        return res.status(400).json({
            message: 'Wrong credentials'
        })
    }

    return res.status(200).json({
            status: 'Success',
            role: result.userType
    })
}



const signUp = async(req, res, next) => {
    const body = req.body;
    const findPhoneNumber = await Users.findOne({where: {phoneNumber: body.phoneNumber}})

    if(findPhoneNumber){
        return res.status(400).json({
            message: 'Phone Number already in use'
        })
    }

    if(!['1','2'].includes(body.userType) || !body.firstName || !body.lastName) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Enter all credentials'
        })
    }


    const result = await Users.findOne({where: {phoneNumber: body.principal}});
    console.log(result)

    let existingChildren;
    if (result !== null){
        existingChildren = result.children == null ? "0":result.children
        result.update({children:existingChildren+','+req.body.childPhoneNumber})
    }else{
        return res.status(400).json({message: 'Reference does not exist'})
    }


    const newUser = await Users.create({
        userType: body.userType,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber,
        password: body.password,
        principal: body.principal
    })
    
    if (!newUser) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Failed to create the user'
        })
    }

    return res.status(201).json({
        status:'success',
        message: 'user created'
    })
}


const getUserByPhone = async(req, res, next) => {
    const userWithId = await Users.findOne({where: {phoneNumber: req.body.phoneNumber}})

    return res.status(200).json({userWithId})
}
module.exports = {signUp, login, getUserByPhone}