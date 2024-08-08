import { useState } from "react";

function useError(initialState = false) {
  const [hasError, setHasError] = useState(initialState);

  const setError = () => setHasError(true);
  const resetError = () => setHasError(false);

  return { hasError, setError, resetError };
}

export default useError;
