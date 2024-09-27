import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { captchaValue, name, email, message } = data;

  // 检查是否存在 reCAPTCHA 响应
  if (!captchaValue) {
    return NextResponse.json({ error: 'reCAPTCHA not completed' }, { status: 400 });
  }

  // 发送请求到 Google 以验证 reCAPTCHA 响应
  // const secretKey = '6LcYW1AqAAAAAO8l_oqRzn3fANif2goU3TVoa-Gt'; // 你的 reCAPTCHA Secret Key
  // const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;

  // const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
  // const captchaResult = await captchaResponse.json();

  const params = { secret: '6LcYW1AqAAAAAO8l_oqRzn3fANif2goU3TVoa-Gt', response: captchaValue };
  console.log(params);
  const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    body: JSON.stringify(params),
  });
  console.log(captchaResponse);
  const captchaResult = await captchaResponse.json();


  if (captchaResult.success) {
    console.log(name + '\n' + email + '\n' + message);
    // reCAPTCHA 验证成功，处理表单数据
    return NextResponse.json({ success: true });
  } else {
    // reCAPTCHA 验证失败
    return NextResponse.json({ error: 'reCAPTCHA validation failed' }, { status: 400 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
