export async function fetchApi(
  input: RequestInfo | URL, 
  init?: RequestInit | undefined) {
  const response = await fetch(`https://parallelum.com.br/fipe/api/v1${input}`, init);
  const dataJson = await response.json();
  return dataJson;
}
