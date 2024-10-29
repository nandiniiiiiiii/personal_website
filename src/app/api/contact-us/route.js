// src/app/api/contact-us/route.js

import { mailOptions, transporter } from "@/email/client"; // Adjust path based on your folder structure
import { replaceMergeTags, stripHTMLTags } from "@/email/helpers";
import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    console.log("hello")
    const data = await request.json();
    console.log("hello2")

    // Get HTML template
    const htmlFilePath = path.join(process.cwd(), 'src/email', 'contact-form.html');
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    // Replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `New Contact Form Inquiry`,
           text: plainTextContent,
           html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
