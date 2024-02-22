import { NextResponse } from 'next/server';
import { VehicleInfoTemplate } from '@/components/forms/EmailTemplates';
import { resend } from '@/lib/resend';

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { vehicle } = body;
    const data = await resend.emails.send({
      from: 'Website <website@globalinksauto.com>',
      to: ['info@globalinksauto.com'],
      subject: `[${vehicle}] Vehicle Additional Information Request`,
      react: VehicleInfoTemplate({ ...body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
