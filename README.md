This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

----

## 项目说明

本项目目的是展示在Next.js框架中怎样使用 Google reCAPTCHA 控件来验证，本着最小demo的原则，讲述本项目的创建过程，当然你可以直接下载本项目运行，只要替换 [app/concact/page.tsx](https://github.com/AlbertGithubHome/nextjs-recaptcha/blob/master/app/contact/page.tsx) 中的 `sitekey` 和 [app/api/submit-form/route.tsx](https://github.com/AlbertGithubHome/nextjs-recaptcha/blob/master/app/api/submit-form/route.tsx) 中的 `secretKey` 就可以了，下面来说说本项目的创建步骤，方面大家直接在自己的项目中集成 `Google reCAPTCHA`。

### 操作步骤

操作之前确保你的开发环境中已经安装了 Node.js 和 npm。你可以通过以下命令检查安装版本：

```bash
node -v
npm -v
```

1. 运行命令创建新的 Next.js 项目

```bash
npx create-next-app@latest nextjs-recaptcha
```

在这里，`nextjs-recaptcha` 是你希望创建的项目名称。运行这个命令后，你会被提示选择一些选项（如是否使用 TypeScript，是否需要 ESLint 等）。

2. 进入项目目录安装依赖项

```bash
cd nextjs-recaptcha
npm install react-google-recaptcha
```

中间如果遇到代码引用找不到 react-google-recaptcha 的情况运行以下命令，目的是将包添加到开发依赖（devDependencies）中

```bash
npm i --save-dev @types/react-google-recaptcha
```

3. 创建前端页面和后端处理API

创建不存在的文件夹和文件，直接复制文件内容替换即可，注意修改成自己的`sitekey` 和 `secretKey`

- [app/concact/page.tsx](https://github.com/AlbertGithubHome/nextjs-recaptcha/blob/master/app/contact/page.tsx)
- [app/api/submit-form/route.tsx](https://github.com/AlbertGithubHome/nextjs-recaptcha/blob/master/app/api/submit-form/route.tsx)


4. 构建和运行

完成上面步骤后，使用以下命令启动项目，之后访问 `http://域名:3000` 就可以进行测试了

```bash
npm run dev
```

### 备注

- 申请 Google reCAPTCHA 的网站 [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
- Google reCAPTCHA申请的key只对绑定的域名有效，如果本地测试可以申请域名 `localhost`