// BEGIN
export default function make(name, options = {}) {
    const company = { name };
    const { state = 'moderating', createdAt = Date.now() } = options;
    return { ...company, state, createdAt, ...options };
  }
  
// END