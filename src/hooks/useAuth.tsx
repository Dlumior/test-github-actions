import React, { useState, useContext, createContext } from "react";

// Add your Auth credentials
// AUTH_CREDENTIALS = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   appID: "",
// };

type UserState = {
  email: string;
  password: string;
  isAuthenticated: boolean;
};

type UseProvideAuthType = {
  user: UserState | null;
  signin: (email: string, password: string) => UserState;
  signup: (email: string, password: string) => UserState;
  signout: () => UserState;
  sendPasswordResetEmail: (email: string) => boolean;
  confirmPasswordReset: (code: string, password: string) => boolean;
};

const defaultUser: UserState = {
  email: "Guest",
  password: "",
  isAuthenticated: false,
};

const authContext = createContext<null | UseProvideAuthType>(null);

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<null | UserState>(null);

  // Wrap any Auth methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string): UserState => {
    const auxUser: UserState = {
      email,
      password,
      isAuthenticated: true,
    };
    setUser(auxUser);
    return auxUser;
  };

  const signup = (email: string, password: string): UserState => {
    const auxUser: UserState = {
      email,
      password,
      isAuthenticated: true,
    };
    setUser(auxUser);
    return auxUser;
  };

  const signout = (): UserState => {
    setUser(defaultUser);
    return defaultUser;
  };

  const sendPasswordResetEmail = (email: string): boolean => {
    // Send a mail to reset the password
    if (email) {
      // Send email
    } else return false;
    return true;
  };

  const confirmPasswordReset = (code: string, password: string) => {
    // Validate the code
    if (code && password) {
      // Change the password
    } else return false;
    return true;
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  /*
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({
          ...user,
          isAuthenticated: false
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  */

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
type ProvideAuthProps = {
  children: React.ReactNode;
};

export const ProvideAuth = ({ children }: ProvideAuthProps) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
