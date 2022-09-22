import { React } from 'react'
import mail from '@sendgrid/mail';
import { Message } from '../store/message';

const ContactForm = () => {
    mail.setApiKey(import.meta.env.PUBLIC_SENDGRID_API_KEY);

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(Message);
        const msg = {
            to: import.meta.env.PUBLIC_RECEIVER_EMAIL,
            from: import.meta.env.PUBLIC_SENDER_EMAIL,
            subject: 'Dev Lead',
            text: `Email: ${Message.email}\nPhone: ${Message.phone}\n\n${Message.message}`,
            html: `Email: ${Message.email}<br/>Phone: ${Message.phone}<br/><br/>${Message.message}`
        }
        mail.send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className='flex'>
            <form onSubmit={sendEmail} className='flex flex-col p-5 gap-y-4 mx-auto'>
                <textarea onChange={(e) => Message.setKey('message', e.target.value)} className='w-full rounded-sm p-3 font-space-grotesk' name='message' id='message' placeholder="Enter your message" type='text' rows='8' required/>
                <div className='md:flex-row flex-col flex w-full gap-x-4'>
                    <input onChange={(e) => Message.setKey('email', e.target.value)} type="email" className='p-3 font-space-grotesk rounded-sm md:mb-0 mb-4' placeholder="Email" required />
                    <input onChange={(e) => Message.setKey('phone', e.target.value)}  type="text" className='p-3 font-space-grotesk rounded-sm' placeholder="Phone Number" required />
                </div>
                <button type='submit' className="mx-auto p-2 px-6 font-space-grotesk rounded-sm border-space-cadet bg-pine-green text-honeydew mb-2 duration-150 hover:scale-[108%]">Send</button>
            </form>
        </div>
    )
}

export default ContactForm