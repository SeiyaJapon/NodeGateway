const apiClient = async (endpoint: string, method: string, data?: any, headers: Record<string, string> = {}) => {
  const url = `${process.env.AUTH_SERVICE_URL}${endpoint}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: data ? JSON.stringify(data) : undefined
  });

  if (!response.ok) {
    const error = new Error(response.statusText);
    (error as any).status = response.status;
    throw error;
  }

  return response.json();
};

export default apiClient;
