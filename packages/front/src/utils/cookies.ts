import cookies from 'js-cookie';

const domain=extractDomain();
function extractDomain(): string{
  const hostname=window.location.hostname;
  if(hostname.match(/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/)){
    return hostname;
  }else{
    return hostname.split('.').slice(-2).join('.');
  }
}
export const cookieStore={
  set(key: string,value: string|string[]): void{
    cookies.set(key,value,{
      domain,
      expires:90
    });
  },
  has(key: string): boolean{
    return cookies.get(key)!==undefined;
  },
  get(key: string): string|undefined{
    return cookies.get(key);
  },
  remove(key: string): void{
    cookies.remove(key,{domain});
  }
};
