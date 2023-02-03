const Error404 = () => {
    const view = `
      <div class="Error404">
        <h2>Error 404</h2>
        <h3> 
        The server cannot find the requested resource. In the browser, 
        this means the URL is not recognized. In an API, this can also mean that 
        the endpoint is valid but the resource itself does not exist. Servers may also send 
        this response instead of 403 Forbidden to hide the existence of a resource 
        from an unauthorized client. This response code is probably the most well known 
        due to its frequent occurrence on the web.
        </h3>
      </div>
    `;
    return view;
  };
  
  export default Error404;