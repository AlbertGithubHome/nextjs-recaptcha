// pages/api/data.ts
import { insertData } from '@/lib/supabaseService';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    const { name, email, age } = data;

    try {
        const currentTime = new Date().toISOString();
        const insertedData = await insertData("profile", {"created_at": currentTime, "age": age});
        console.log('\nreceive form data:\n' + name + '\n' + email + '\n' + age);

        if (insertData == null) {
            return NextResponse.json({}, { status: 400 });
        } else {
            console.log(JSON.stringify(insertedData))
        }

        return NextResponse.json({ success: true });
      } catch (error) {
        console.log('Internal Server Error')
        return NextResponse.json({ error: 'Internal Server Error' + JSON.stringify(error) }, { status: 500 });
    }
  }

  export async function OPTIONS() {
    return NextResponse.json({}, { status: 200 });
  }
