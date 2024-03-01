import React from "react"
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'

import { Tailwind } from "@react-email/tailwind"

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received the following message
                                <Text>
                                    {message}
                                    <Hr />
                                    <Text>The senders email is: {senderEmail}</Text>
                                </Text>
                            </Heading>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}