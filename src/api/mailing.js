// Currently not in use
const contactHandler = ( req, res ) => {

    // console.log(`🚀 ~ file: mailing.js ~ line 2 ~ contactHandler ~ res`, res)
    console.log(`🚀 ~ file: mailing.js ~ line 2 ~ contactHandler ~ req`, req.body)

    return { req: 1 , res : 2 }  
}

export default contactHandler