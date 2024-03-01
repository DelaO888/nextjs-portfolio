'use server'

import { getErrorMessage, validateString } from "@/lib/utils"
import { send } from "process"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"
import React from "react"

const resend = new Resend(process.env.API_KEY)



export const sendEmail = async (FormData: FormData) => {


    const senderEmail = FormData.get('senderEmail')
    const message = FormData.get('message')

    if (!validateString(senderEmail, 500)) {
        return {
            error: "invalid email"
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'delao0888@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })

        })
    } catch (e: unknown) {
        return {
            error: getErrorMessage(e)
        }
    }

    return {
        data,
    }

}