import type {FC} from "react";
import React from "react";
import {Store2} from "./store/Store2";

type Props = {}

export const Version: FC<Props> = React.memo((props) => {
    const {version, setVersion} = Store2.useContainer();
    return <div>
        <div>
            <button type={'button'} onClick={() => setVersion(n => n + 1)}>Re-render ({version})</button>
        </div>
    </div>
})
