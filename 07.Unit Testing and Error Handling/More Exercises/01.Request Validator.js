let data = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'https://svn.myservice.com/downloads/'
  };
  function validate(data){
    let validMethods = ['GET', 'POST', 'DELETE' ,'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
    let uriRegex = /^[a-zA-Z0-9.]+$/;
    let messageRegex = /^[^<>&'"\\]*$/;
    if(!validMethods.includes(data.method) || data['method'] == undefined){
          throw new Error('Invalid request header: Invalid Method');
    }
    //regex for uri - ^[a-zA-Z0-9.]+$
    if (!uriRegex.test(data.uri) || data['uri'] == undefined) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!validVersions.includes(data.version)|| data['version'] == undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }   
    if (!messageRegex.test(data.message) || data['message'] == undefined) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return data;
  }
  console.log(validate(data));
