// Import React
import React from 'react'

const ContactForm = () => {

    // const handleSubmit = async ( e ) => {
    //     e.preventDefault()
    // }

    // const [value, setValue] = React.useState({})
    // const [serverResponse, setServerResponse] = React.useState(``)
    
    async function onSubmit(e) {
        e.preventDefault()
        // const response = await window
        //   .fetch(`/api/form`, {
        //     method: `POST`,
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(value),
        //   })
        //   .then(res => res.json())
        // setServerResponse(response)
      }
    
    return ( 
        <form method="post" onSubmit={onSubmit} action={`${process.env.GATSBY_API_URL}`}>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Name
                <input type="text" name="name" />
            </label>
            <label>
                Message
                <input type="text" name="message" />
            </label>
            <input type="submit"/>
        </form>
    )
}

export default ContactForm
