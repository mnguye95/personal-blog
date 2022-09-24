import { React } from 'react'
import { useStore } from '@nanostores/react'
import { Message } from '../store/message';
// action="/api/send" method="GET"
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
    Message.listen((value, changed) => {
        console.log(`${changed} new value ${value[changed]}`)
      })
    return (
        <div className='flex'>
            <form id='contactForm' onSubmit={handleSubmit} className='flex flex-col p-5 gap-y-4 md:mx-auto md:w-auto mx-0 w-full'>
                <textarea onChange={(e) => Message.setKey('message', e.target.value)}  name="message" id='message' className='w-full rounded-sm p-3 font-space-grotesk' placeholder="Enter your message" type='text' rows='4' required/>
                <div className='md:flex-row flex-col flex w-full gap-x-4'>
                    <input onChange={(e) => Message.setKey('email', e.target.value)}  name="email" type="email" className='p-3 font-space-grotesk rounded-sm md:mb-0 mb-4' placeholder="Email" required />
                    <input onChange={(e) => Message.setKey('phone', e.target.value)}  name="phone" type="text" className='p-3 font-space-grotesk rounded-sm' placeholder="Phone Number" required />
                </div>
                {/* <div className='flex flex-col p-5 gap-y-4 mx-auto'>
                    <p className='text-center mx-auto font-bold font-space-grotesk text-light-cyan'>Message Sent!</p>
                </div> */}
                <button type='submit' className={`g-recaptcha mx-auto p-2 px-6 font-space-grotesk rounded-sm border-space-cadet mb-2 ${message.sent ? 'disabled disabled:opacity-75 bg-cinnamon-satin cursor-not-allowed' : 'duration-150 hover:scale-[108%] bg-pine-green text-honeydew'}`} data-sitekey="6LdmhCAiAAAAAAPLxCPDC4xQZN2Ie3hFSk7q2Juj" data-callback='onSubmit' data-action='submit'>{message.sent ? 'Sent!' : 'Send Message'}</button>
            </form>
        </div>
    )
}

export default ContactForm