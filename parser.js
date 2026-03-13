class Parser {
  constructor(config) {
    this.config = config;
  }

  parseToken(token) {
    try {
      const decodedToken = JSON.parse(Buffer.from(token, 'base64').toString('utf8'));
      if (decodedToken.exp < Date.now() / 1000) {
        throw new Error('Token has expired');
      }
      return decodedToken;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  parseRequest(request) {
    const { headers, body } = request;
    const token = headers['authorization'];
    if (!token) {
      throw new Error('Authorization header is missing');
    }
    const decodedToken = this.parseToken(token);
    return { ...body, userId: decodedToken.userId };
  }
}

module.exports = Parser;