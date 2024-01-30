import jwt from "jsonwebtoken"

export const jwtVerfication = (secret) => {

    return async (req, res, next) => {

        // Get the token from the request headers
        const token = req?.headers['authorization'].split(' ')[1]

        // Check if the token is missing
        if (!token) return res.json({ message: "token is not found ..please login" })
        else {

            try {
                // Verify the token using your secret or public key
                const userdata = await jwt.verify(token, secret)
                // Attach the decoded payload to the request object for further use
                req.userdata = userdata
                console.log('verfied succesfull')
                next()

            } catch (err) {
                 // Handle invalid or expired tokens
                return res.json({ message: 'error occured while verifying account using jwt...token is not mathcing ', error: err })

            }

        }

    }



} 