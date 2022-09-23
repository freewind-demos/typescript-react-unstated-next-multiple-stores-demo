import {useState} from 'react';
import {createContainer} from "unstated-next";

export const Store = createContainer(() => {
    const [user, setUser] = useState<string>();
    const [version, setVersion] = useState(0)
    return {user, setUser, version, setVersion}
});
