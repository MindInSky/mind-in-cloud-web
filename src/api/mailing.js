// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// // javascript
// const sgMail = require('@sendgrid/mail')

export default async function handler ( req, res ) {

	console.log(`🚀 ~ file: mailing.js ~ line 6 ~ newFunction ~ req`, req)

// 	const response = {
// 		body: '',
// 		statusCode : ''
// 	}

// 	sgMail.setApiKey(process.env.GATSBY_SENDGRID_KEY)

// 	const msg = {
// 		from: process.env.GATSBY_SENDGRID_FROM, // Change to your verified sender
// 		to: process.env.GATSBY_SENDGRID_TO, // Change to your recipient
// 		subject: 'From the Contact Form',
// 		text: 'and easy to do anywhere, even with Node.js',
// 		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// 	}
// 	sgMail
// 		.send( msg )
// 		.then(() => {

// 			console.log('Email sent')
// 			response.body({})
// 			response.statusCode(200)

// 		})
// 		.catch(( error ) => {

// 			console.error( error )
// 			response.body({ error: error.message })
// 			response.statusCode(error.code)

// 		})


	return res

}

// const sendgrid = require("@sendgrid/mail")
// //Your API Key from Sendgrid
// sendgrid.setApiKey(process.env.GATSBY_SENDGRID_KEY)
// const message = {
//   //Your authorized email from SendGrid
//   from: process.env.GATSBY_SENDGRID_FROM,
// 	to: process.env.GATSBY_SENDGRID_TO, // Change to your recipient
// }

// const handler = (req, res) => {

// 	let response = {
// 		status :'',
// 		message : ''
// 	}
//   try {
//     // if (req.method !== "POST") {
//     //   res.json({ message: "Try a POST!" })
//     // }

//     if (req.body) {
// 			message.subject = 'From the Contact Form'
// 			message.text = 'and easy to do anywhere even with Node.js'
// 			message.html = '<strong>and easy to do anywhere, even with Node.js</strong>'
//     }

//     return sendgrid.send(message).then(
//       () => {
//         res.status(200).json({
//           message: "I will send email",
//         })
//       },
//       error => {
//         console.error(error)
//         if (error.response) {
//           return res.status(500).json({
//             error: error.response,
//           })
//         }
//       }
//     )
//   } catch (err) {
//     console.log(err)
// 		response.status = 500
// 		response.message = { message: "There was an error", error: err }

//     return response
//   }
// }

// module.exports = handler