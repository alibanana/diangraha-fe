export const API_BASE_URL = '/api';
export const SERVER_BASE_URL = 'https://diangraha-be-production.up.railway.app';

export const getImageUrl = (imagePath?: string | null): string => {
  if (!imagePath) return "/placeholder.png";
  if (imagePath.startsWith("http")) return imagePath;
  return `${SERVER_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};

export function safeImageUrl(path?: string | null): string {
  return getImageUrl(path); 
}
