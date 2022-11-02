export async function GetIP(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch(String(process.env.NEXT_PUBLIC_API_IP), {
      method: 'GET',
      cache: 'no-cache',
    })
      .then((rest) => (rest.ok ? rest.json() : Promise.reject(rest.statusText)))
      .then((data) => {
        window.dataLayer.push({
          event: 'ipTextView',
          ipText: data?.ip,
        });
        resolve(data?.ip);
      })
      .catch((err) => reject(err));
  });
}
