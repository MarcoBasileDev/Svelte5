import {SENDGRID_API_KEY} from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({request}) {
	const { contactName, contactEmail, projectInformation } = await request.json();

	if (!contactName || !contactEmail || !projectInformation) {
		return json({message: "Could not send email. Missing information."}, {status: 400});
	}

	const message = {
		to: 'marco.basile1996@gmail.com',
		from: 'marco.basile1996@gmail.com',
		subject: 'Contact Form on your portfolio',
		html: `Somebody sent you an email\nName: ${contactName}\nEmail: ${contactEmail}\nProject Information: ${projectInformation}`
	};
	console.log(message);
	try {
		await sgMail.send(message);
		return json({emailSentSuccessfully: true});
	} catch (error) {
		return json({error}, {status: 500});
	}
}