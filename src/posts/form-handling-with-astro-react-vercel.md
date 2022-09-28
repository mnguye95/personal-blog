---
title: Form Handling With Astro, React, and Vercel
slug: form-handling-with-astro-react-vercel
excerpt: Receive form submissions with your Astro app on serverless functions provided by Vercel.
date: 2022-09-23
author: Michael Nguyen
---

When I found out about Astro, I figured I use it for my portfolio blog. All was well until I got to components with state logic. Having to use React and Astro together while hosted on Vercel, the configuration for server-side rendering and routing was a little convoluted. 

After scratching my head and searching for any tutorials or solutions, I pieced together small bits and here's how I ended up doing it.

First, create a [SendGrid](https://sendgrid.com/) account and verify your sender identity. This will be our SMTP server responsible for emails.

We're going to create a route that'll handle our POST requestion. 

To utilize serverless functions, all you need to do is add a new directory in the root of your Astro project and add a JS file which will be your route.

/api/send

```
├── api/
│   └── send.js
├── public
├── src
├── .env
├── astro.config.mjs
├── config.json
└── package.json
```

<br>  

Since we're using React with Astro, useState and other hooks are not supported. Instead, Astro recommends using nanostores to pass state values between components. We'll be using it to store input fields and make a POST request to our serverless function to send an message to our email address.

Let's install nanostore

```
npm install nanostores
```
<br>  

Start off by creating your form component:

```javascript
// components/ContactForm.jsx
import { React } from 'react'
import { useStore } from '@nanostores/react'
import { Message } from '../store/message';

const ContactForm = () => {

    const message = useStore(Message);

    const handleSubmit  = async (e) => {
        e.preventDefault();
        if (!message.sent) {
            Message.setKey('sent', true)
            const params = {
                email: message.email,
                phone: message.phone,
                message: message.message,
            }
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
            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => Message.setKey('message', e.target.value)} name="message" id='message' placeholder="Enter your message" type='text' rows='4' required/>
                <div>
                    <input onChange={(e) => Message.setKey('email', e.target.value)}  name="email" type="email" placeholder="Email" required />
                    <input onChange={(e) => Message.setKey('phone', e.target.value)}  name="phone" type="text" placeholder="Phone Number" required />
                </div>
                <button type='submit'>{message.sent ? 'Sent!' : 'Send Message'}</button>
            </form>
        </div>
    )
}

export default ContactForm
```

<!-- ![EZ](public\images\me.jpeg "Me") -->

<!-- ```javascript
function hi() {
    console.log('Hi')
}
``` -->