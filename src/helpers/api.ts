export async function fetchApi(
  input: RequestInfo | URL, 
  init?: RequestInit | undefined) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${input}`, init);
  const dataJson = await response.json();
  return dataJson;
}
