import {useState} from 'react';

import {createGlobalStore} from 'hox';


export const [useStore] = createGlobalStore(() => {
    const [user, setUser] = useState<string>();
    const [version, setVersion] = useState(0)
    return {user, setUser, version, setVersion}
});
