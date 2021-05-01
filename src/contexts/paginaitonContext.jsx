import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

const PaginationContext = createContext({});

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      if (state > 0) {
        return state - 1;
      }
      return state;
    default:
      throw new Error();
  }
}

const PaginationContextProvider = ({ children }) => {
  const [page, dispatch] = useReducer(reducer, 0);
  const [pageLimit, setPageLimit] = useState(0);

  return (
    <PaginationContext.Provider value={{
      page, dispatch, pageLimit, setPageLimit,
    }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

PaginationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PaginationContext, PaginationContextProvider };
