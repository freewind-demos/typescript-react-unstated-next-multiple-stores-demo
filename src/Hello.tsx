import React, {FC} from 'react';
import './Hello.pcss';
import {Version} from "./Version";
import {User} from "./User";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div>
        <Version/>
        <User/>
    </div>;
}
