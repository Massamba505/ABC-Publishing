export async function getData(path) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/${path}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}
