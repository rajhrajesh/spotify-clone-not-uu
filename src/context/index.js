// DataLayer.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
export const initialState = {
    user: null,
    token: null,
    playlists: [],
    discover_weekly: null,
};

// Create context
export const DataLayerContext = createContext();

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_TOKEN':
            return { ...state, token: action.token };
        case 'SET_PLAYLISTS':
            return { ...state, playlists: action.playlists };
        case 'SET_DISCOVER_WEEKLY':
            return { ...state, discover_weekly: action.discover_weekly };
        default:
            return state;
    }
};

// DataLayer component
export const DataLayer = ({ initialState, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// Custom hook to use the DataLayer context
export const useDataLayerValue = () => useContext(DataLayerContext);
