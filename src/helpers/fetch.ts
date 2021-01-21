const urlBase = process.env.REACT_APP_URL_API;

export const simpleFetch = async ( endpoint:string, data:any, method='GET'): Promise<any> => {
  
  const url = `${ urlBase }/${ endpoint }`;

  if ( method === 'GET' ) {
    const resp = await fetch( url, {} );
    return await resp.json();
  } else {
    const resp = await fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify( data )
    });
    return await resp.json();
  }

};

export const tokenFetch = async ( endpoint:string, data:any, method='GET'): Promise<any> => {
  
  const url = `${ urlBase }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';

  if ( method === 'GET' ) {
    const resp = await fetch( url, {
      method,
      headers: {
        'x-token': token
      }
    });
    return await resp.json();
  } else {
    const resp = await fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify( data )
    });
    return await resp.json();
  }
};
