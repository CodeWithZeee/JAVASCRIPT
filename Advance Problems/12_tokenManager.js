function setAuthToken(token, expirationInMinutes = 60) {
  const expiresAt = Date.now() + expirationInMinutes * 60 * 1000; // convert minutes to milliseconds
  const authData = {
    token,
    expiresAt
  };
  localStorage.setItem('auth', JSON.stringify(authData));
}

// Example usage of the setAuthToken function
setAuthToken("abc123xyz", 30); // sets token with 30-minute expiration