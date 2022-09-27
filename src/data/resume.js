export const get = async function get() {
    try {
        var fileStream = fs.createReadStream(`./public/files/resume.pdf`);
        const chunks = []
        for await (let chunk of fileStream) {
            chunks.push(chunk)
        }
        // return { body: Buffer.concat(chunks), encoding: 'binary' };
        return new Response(Buffer.concat(chunks), {
            status: 200,
            headers: { 'content-type': `application/pdf` },
          });
      
    }
    catch (error) {
        return new Response(`Something went wrong in resume.pdf route!: ${error}`, {
            status: 501,
            statusText: 'Server error',
          });
    }
};
