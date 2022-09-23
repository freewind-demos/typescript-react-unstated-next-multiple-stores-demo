import {useCallback, useState} from 'react';
import {createContainer} from "unstated-next";
import {Store2} from "./Store2";

export const Store1 = createContainer(() => {
    const [user, _setUser] = useState<string>();
    const {version} = Store2.useContainer();

    const setUser = useCallback((newUser: string) => {
        _setUser(`${newUser}(${version})`)
    }, [version]);
    return {user, setUser}
});
