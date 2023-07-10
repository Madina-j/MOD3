import React, { createContext, useState } from "react";

export const context = createContext();

const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <context.Provider
      value={{
        images,
        setImages,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
