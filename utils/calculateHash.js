import crypto from "crypto";

export default function calculateSecretHash(clientId, secret, username) {
  const message = `${username}${clientId}`;
  return crypto.createHmac("sha256", secret).update(message).digest("base64");
}
