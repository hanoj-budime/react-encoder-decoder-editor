export function urlEncode(text) {
  try {
    return encodeURIComponent(text);
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

export function urlDecode(text) {
  try {
    return decodeURIComponent(text);
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

export function base64Encode(text) {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

export function base64Decode(text) {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

export function hexEncode(text) {
  return Array.from(text)
    .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
}

export function hexDecode(text) {
  try {
    if (!/^[0-9a-fA-F]+$/.test(text) || text.length % 2 !== 0) {
      throw new Error("Invalid Hex string");
    }
    return text.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

