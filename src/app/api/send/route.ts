import { NextResponse } from 'next/server';
import { ContactTemplate } from '@/components/forms/EmailTemplates';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { subject } = body;
    const data = await resend.emails.send({
      from: 'Website <website@globalinksauto.com>',
      to: ['info@globalinksauto.com'],
      subject: subject || 'Message From GLA Website',
      react: ContactTemplate({ ...body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
