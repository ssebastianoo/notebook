// serve.ts
Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // Default to index.html for directory roots
    //
    let endsWithSlash = false;
    if (pathname.endsWith("/")) {
      pathname += "index.html";
      endsWithSlash = true;
    }

    if (pathname.split(".").length === 1) {
      pathname += ".html";
    }

    let fileExists = true;
    let file = Bun.file(`./build${pathname}`);

    if (!(await file.exists())) {
      if (pathname.endsWith(".html")) {
        pathname = pathname.replace(".html", "/index.html");
        file = Bun.file(`./build${pathname}`);
        if (!(await file.exists())) {
          fileExists = false;
        }
      } else {
        fileExists = false;
      }
    }

    // if (await file.exists()) {
    //   return new Response(file);
    // }
    //
    if (fileExists) return new Response(file);

    if (endsWithSlash) {
      console.log(pathname.replace("/index.html", ""));
      return Response.redirect(pathname.replace("/index.html", ""), 302); // or 302 for temporary
    }
    return new Response("Not found: " + pathname, { status: 404 });
  },
});

console.log("Serving build/ at http://localhost:3000");
