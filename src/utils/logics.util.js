export const mockPromise = (data = [], timeout = 700) => new Promise(res => setTimeout(() => res(data), timeout))