export async function fetchApi(
  input: RequestInfo | URL, 
  init?: RequestInit | undefined) {
  const response = await fetch(`${process.env.baseUrl}${input}`, init);
  const dataJson = await response.json();
  return dataJson;
}
