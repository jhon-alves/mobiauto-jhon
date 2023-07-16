export async function fetchApi(url: string) {
  const response = await fetch(`${process.env.baseUrl}${url}`, { method: 'GET' });
  const dataJson = await response.json();
  return dataJson;
}
