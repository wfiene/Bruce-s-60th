import { createContext, useState } from 'react';

export const TabContext = createContext();

function TabWrapper({ children }) {
    const [tabNumber, setTabNumber] = useState(0);
    const TabContextValue = {
        tabNumber, setTabNumber,
    };
    return (
        <TabContext.Provider value={TabContextValue}>
            {children}
        </TabContext.Provider>
    );
}

export default TabWrapper;
