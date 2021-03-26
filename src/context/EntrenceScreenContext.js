import React, { useState } from 'react';

const EntrenceContext = React.createContext();

function EntrenceScreenSeen({children}){
    var reloaded = performance.navigation.type == 1 ? true : false

    var [seen, setSeen] = useState(reloaded);

    var setToSeen = () => {
        setSeen(true);
    }

    return (
        <EntrenceContext.Provider value={{seen, setToSeen}}>
            {children}
        </EntrenceContext.Provider>
    )

}

export {EntrenceContext, EntrenceScreenSeen};