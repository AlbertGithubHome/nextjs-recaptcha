import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { captchaValue, name, email, message } = data;

  // 检查是否存在 reCAPTCHA 响应
  if (!captchaValue) {
    return NextResponse.json({ error: 'reCAPTCHA not completed' }, { status: 400 });
  }

  // 发送请求到 Google 以验证 reCAPTCHA 响应
  const params = { secret: '6Lcca1AqAAAAAGOOD_aiY3o7Pmqz2THlyPAo1yx5', response: captchaValue };
  console.log(params);
  const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    body: JSON.stringify(params),
  });

  // 输出返回结果
  console.log(captchaResponse);
  const captchaResult = await captchaResponse.json();
  console.log(captchaResult);

  if (captchaResult.success) {
    console.log(name + '\n' + email + '\n' + message);
    // reCAPTCHA 验证成功，处理表单数据
    return NextResponse.json({ success: true });
  } else {
    // reCAPTCHA 验证失败
    return NextResponse.json({ error: 'reCAPTCHA validation failed.' + JSON.stringify(captchaResult) }, { status: 400 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
