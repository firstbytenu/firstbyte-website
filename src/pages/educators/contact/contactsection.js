import React, { useRef } from 'react'
import './contactsection.css';

const EmailSection = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }
        
        return (
            <>
                {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className="btn-primary"/>
                </form> */}
                <div className="bottom-bar">
                    <div>
                        Get in touch!
                        Email address: teachfirstbyte@gmail.com
                    </div>
                    
                    <div>
                        Interested in joining?
                        Fill out our&nbsp;
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgdHqfrIbdoDwoKo06yk677UNw07TpHJFL-hvNZ62cjojCpw/viewform">volunteer interest form!</a>
                    </div>
                </div>
            </>
        );
};
export default EmailSection;