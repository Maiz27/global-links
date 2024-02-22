import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import { AfterSaleTemplate } from '@/components/forms/EmailTemplates';

export async function POST(req: any) {
  try {
    const body = await req.json();
    const data = await resend.emails.send({
      from: 'Website <website@globalinksauto.com>',
      to: ['info@globalinksauto.com'],
      subject: 'After Sale Request!',
      react: AfterSaleTemplate({ ...body }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
