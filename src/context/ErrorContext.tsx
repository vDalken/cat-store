import { createContext, useState, ReactNode} from 'react';

interface ErrorContextType {
  error: boolean;
  setError: (error: boolean) => void;
}

export const ErrorContext = createContext<ErrorContextType>({
  error: false,
  setError: () => {},
});

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
