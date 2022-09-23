import type {FC} from "react";
import React from "react";
import {Store1} from "./store/Store1";

type Props = {}

export const User: FC<Props> = React.memo((props) => {
    const {user, setUser} = Store1.useContainer();
    return <div>
        <div>User: {user}</div>
        <div><input type={'text'} value={user} onChange={(event) => setUser(event.target.value)}/></div>
    </div>
})
