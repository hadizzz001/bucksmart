"use server"; 
import {Resend} from "resend";
import { redirect } from 'next/navigation';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => { 
    const email = formData.get("senderEmail");
    const message = formData.get("message"); 

 
    resend.emails.send({
        // from: email+"",
        from: "info@hadizproductions.com",
        to: "info@hadizproductions.com",
        subject: "New message from your website customer",
        text: "Email: " + email + "\n" + message,
    })
    redirect('/success');
 
}

 