import {useState} from 'react';
import {createContainer} from "unstated-next";

export const Store2 = createContainer(() => {
    const [version, setVersion] = useState(0)
    return {version, setVersion}
});
