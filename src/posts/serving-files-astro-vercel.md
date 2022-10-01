---
title: Serve Files in your Astro app hosted on Vercel
slug: serving-files-astro-vercel
excerpt: Here's how to serve files on Vercel with AstroJS
date: 2022-09-22
author: Michael Nguyen
description: Have an Astro app hosted on Vercel? Here's how you can serve static files with serverless functions.
---

See my resume in the top right corner? When you click, you'll be presented with my resume PDF. I'll show you how to do the exact thing.

Astro is capable of doing the same feature but since we're hosted on Vercel, we're going to make use of the Serverless Function feature to be able to serve non-HTML responses whenever we receive a request.

First, set up a [Vercel local deployment environment](https://vercel.com/docs/concepts/functions/serverless-functions#local-development). Serverless functions will not work locally with **npm run dev**.

Be sure to install vercel ***globally*** with the -g flag or the CLI will not run.

```
npm i -g vercel
vercel dev 
```
<br>  

Now place your resume.pdf in the public folder of your project.

```
api
public/
└── resume.pdf
src
.env
...
```
<br>  

Add a directory called **"api"** in the root of your Astro project and add a JS file named **"resume.pdf.js"** into that folder.

```
├── api/
│   └── resume.pdf.js
├── public
├── src
├── .env
└── ...
```

<br>  

Next, in the 'resume.pdf.js' file, add the following code snippet:

```javascript
import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
    const file = path.join(process.cwd(), 'public', 'resume.pdf');
    var b = Buffer.from(readFileSync(file, 'binary'), 'binary');
  
    res.setHeader('Content-Type', 'application/pdf');
    return res.end(b);
}

```
<br>  

If you're on your local development environment, test the route at http://localhost:3000/api/resume.pdf.

You should see something this:

<iframe class='w-full min-h-screen mb-8' src="/api/resume.pdf" title="Michael's Resume"></iframe>

## Viola! File Served with Vercel in an Astro app

I hope you learned something. Thanks for reading!