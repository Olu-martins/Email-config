import * as React from 'react';
import PlaidVerifyIdentityEmail from './emails/merchants/verify-identity-html';
import emaiKey from '@sendgrid/mail';
import { render } from "@react-email/render";
import 'dotenv/config'

require('dotenv').config()

const api: string = process.env.SENDGRID_API_KEY ?? "";

emaiKey.setApiKey(api);

const emailComponent = render(<PlaidVerifyIdentityEmail />)

const message = {
    to: ['mayowasamuel86@gmail', 'olumayowa@korapay.com'],
    from: {
        name: 'Verify Identity email',
        email: 'bethanyinfor@gmail.com'
    },
    subject: 'Verify your idendity',
    html: emailComponent
}

export const sendEmail = () => {
    emaiKey
        .send(message)
        .then(() => console.log('Email sent successfully'))
    .catch((error: Error)=> console.log(error.message))
}