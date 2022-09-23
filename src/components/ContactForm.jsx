import { React } from 'react'
import { Message } from '../store/message';
// action="/api/send" method="GET"
const ContactForm = () => {
    var last_clicked = 0;
    const handleSubmit  = async (e) => {
        if (Date.now() - last_clicked < 1000000) {
            e.preventDefault();
            return;
        }        
        e.preventDefault();
        console.log('button clicked');
        const params = {
            email: Message.value.email,
            phone: Message.value.phone,
            message: Message.value.message,
        }
        await fetch('/api/send?' + new URLSearchParams(params))
            .then((res) => {
                console.log(res.status);
                last_clicked = Date.now();
                Astro.redirect('/contact');
            });
    }

    return (
        <div className='flex'>
            {Message.sent ?
             <div className='flex flex-col p-5 gap-y-4 mx-auto'>
                <p className='text-center mx-auto font-bold font-space-grotesk text-light-cyan'>Message Sent!</p>
            </div> : <form id='contactForm' onSubmit={handleSubmit} className='flex flex-col p-5 gap-y-4 mx-auto'>
                <textarea onChange={(e) => Message.setKey('message', e.target.value)}  name="message" id='message' className='w-full rounded-sm p-3 font-space-grotesk' placeholder="Enter your message" type='text' rows='8' required/>
                <div className='md:flex-row flex-col flex w-full gap-x-4'>
                    <input onChange={(e) => Message.setKey('email', e.target.value)}  name="email" type="email" className='p-3 font-space-grotesk rounded-sm md:mb-0 mb-4' placeholder="Email" required />
                    <input onChange={(e) => Message.setKey('phone', e.target.value)}  name="phone" type="text" className='p-3 font-space-grotesk rounded-sm' placeholder="Phone Number" required />
                </div>
                <button type='submit' className='g-recaptcha mx-auto p-2 px-6 font-space-grotesk rounded-sm border-space-cadet  mb-2 duration-150 hover:scale-[108%] bg-pine-green text-honeydew' data-sitekey="6LdmhCAiAAAAAAPLxCPDC4xQZN2Ie3hFSk7q2Juj" data-callback='onSubmit' data-action='submit'>Send</button>
            </form>}
        </div>
    )
}

export default ContactForm