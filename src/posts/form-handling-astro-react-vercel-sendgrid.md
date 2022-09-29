---
title: Form Handling in Astro with React, Vercel, and SendGrid
slug: form-handling-astro-react-vercel-sendgrid
excerpt: Receive form submissions with your Astro app on serverless functions provided by Vercel and SendGrid
date: 2022-09-23
author: Michael Nguyen
---

Astro, React, and Vercel...

With Astro being a little over year old at the time of this blog, building an app with this stack may feel like trending unknown waters.

## Setting up Sendgrid STMP and Adding Environment Variables in Astro JS

First, create a [SendGrid](https://sendgrid.com/) account and verify your email address sender identity. This will be our SMTP server responsible for emails.

Go to [SendGrid API Guide](https://app.sendgrid.com/guide/integrate), choose Node.JS, and obtain an API key.

Create a .env file if you haven't and add the following keys:

```
PUBLIC_SENDGRID_API_KEY="" # Add your API key here
PUBLIC_RECEIVER_EMAIL="" # Email to receive submissions
PUBLIC_SENDER_EMAIL="" # Verified sender email
```

<br>  

[Astro environment variables](https://docs.astro.build/en/guides/environment-variables/) works different from React. Any variables used on the client-side must be prefixed with **PUBLIC_** while server-side is prefixed with  **SECRET_**.

## Enabling Vercel Serverless Functions in your Astro Deployment

When we send a POST request to SendGrid's API, we can only do that on the server-side. 

Astro supports [server-side rendering](https://docs.astro.build/en/guides/server-side-rendering/#api-routes). But we'll be utilizing [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions#:~:text=Functions%20(Lambda)%20enable%20developers%20to%20write%20functions%20in%20JavaScript%20and%20other%20languages%20to%20handle%20user%20authentication%2C%20form%20submissions) makes it easy.

We'll make sure we're in a [Vercel local deployment environment](https://vercel.com/docs/concepts/functions/serverless-functions#local-development). Serverless functions will not work locally with **npm run dev**.

Be sure to install vercel ***globally*** with the -g flag or the CLI will not run.

```
npm i -g vercel
vercel dev 
```
<br>  

Add a directory called **"api"** in the root of your Astro project and add a JS file named **"send.js"** into that folder.


```
├── api/
│   └── send.js
├── public
├── src
├── .env
└── ...
```

<br>  

In the send.js file, add this code snippet:

```javascript
import mail from "@sendgrid/mail";

export default function handler(request, response) {
  mail.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY);
  const {email, phone, message} = request.query;
  const msg = {
    to: process.env.PUBLIC_RECEIVER_EMAIL,
    from: process.env.PUBLIC_SENDER_EMAIL,
    subject: "New Submission from Astro",
    text: `Email: ${email}\nPhone: ${phone}\n\n${message}`,
    html: `Email: ${email}<br/>Phone: ${phone}<br/><br/>${message}`,
  };

  mail.send(msg)
    .then(() => {
      console.log("Email sent");
      response.status(200)
    })
    .catch((error) => {
      console.error(error);
    });
}
```

<br>

## State management in Astro and React with nanostores

***React's useState and other hooks are not supported in Astro.***

Instead, [Astro recommends using nanostores](https://docs.astro.build/en/core-concepts/sharing-state/) to pass state values between components.

It's like React's state management with a few extra steps.

We'll store input values, and add them a POST request to our serverless function that'll send a message to the receiver email address.

Let's install nanostores.

```
npm install nanostores
```
<br>  

Create a folder called 'store' at your project root and create a file named 'details.jsx' inside.
```
├── store/
│   └── details.jsx
├── api
├── public
├── src
├── .env
└── ...
```

<br>  

Add this to 'details.jsx':

```javascript
// src/stores/details.jsx
import { map } from 'nanostores'

export const Details = map({
    email: '',
    phone: '',
    message: '',
    sent: false // Prevents submission spam
})
```
<br>

With nanostores, the state is managed by an external file called a store.

To import the store into your component:
```javascript
import { Details } from '../store/details';
```
<br>  

We can mutilate and access the states in the store file with the 'useStore' function.
```javascript
import { useStore } from '@nanostores/react'
```
<br>  


```javascript
// src/components/ContactForm.jsx
import { React } from 'react'
import { useStore } from '@nanostores/react'
import { Details } from '../store/details';

const ContactForm = () => {

    const details = useStore(Details); 

    return (
        <div>
            <form onSubmit={}>
            ...
            </form>
        </div>
    )
}
export default ContactForm
```
<br>  

To set state with nanostores, use the function

```javascript
YourStore.setKey('key', 'value');
```

<br>  

Let's set up some input fields with the OnChange attribute and the setKey function.

This will update our store on each keystroke from our visitor.

```javascript
// src/components/ContactForm.jsx
import { React } from 'react'
import { useStore } from '@nanostores/react'
import { Details } from '../store/details';

const ContactForm = () => {

    const details = useStore(Details);

    return (
        <div>
            <form onSubmit={}>
                <textarea 
                    onChange={(e) => Details.setKey('message', e.target.value)} 
                    name="message"
                    id='message'
                    placeholder="Enter your message"
                    type='text'
                    rows='4'
                    required/>
                <div>
                    <input 
                        onChange={(e) => Details.setKey('email', e.target.value)}
                        name="email"
                        type="email"
                        placeholder="Email"
                        required />
                    <input
                        onChange={(e) => Details.setKey('phone', e.target.value)} 
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        required />
                </div>
                <button type='submit'>{message.sent ? 'Sent!' : 'Send Details'}</button>
            </form>
        </div>
    )
}
export default ContactForm
```
<br>  

## Making a POST request to Vercel's Serverless Function

Now, we'll need to send a request to our /api/send/ route.

```javascript
// src/components/ContactForm.jsx
import { React } from 'react'
import { useStore } from '@nanostores/react'
import { Details } from '../store/details';

const ContactForm = () => {

    const details = useStore(Details);   // Accessing our states

    const handleSubmit  = async (e) => {
        e.preventDefault();
        if (!details.sent) {             // Check if the message is sent already
            Details.setKey('sent', true) // Set 'sent' to true to prevent form spam click
            const params = {
                email: details.email,    // Making states into a request query
                phone: details.phone,
                message: details.message,
            }                            // Request to serverless function with the query
            await fetch('/api/send?' + new URLSearchParams(params))
                .then((res) => {
                    console.log(res.status);
                });
        } else {
            return;
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}> {'Add handleSubmit to onSubmit on your form'}
                ...
            </form>
        </div>
    )
}

export default ContactForm
```

<br>  

