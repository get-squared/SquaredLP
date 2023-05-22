/* Created instead added axios to project */
class Fetch {
  link: string;

  constructor(link = 'http://localhost:4321') {
    this.link = `${link}`;
  }

  post(url?: string, body?: any) {
    try {
      return fetch(`${this.link}${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { Fetch };