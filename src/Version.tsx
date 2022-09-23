import type {FC} from "react";
import React from "react";
import {Store} from "./store/Store";

type Props = {}

export const Version: FC<Props> = React.memo((props) => {
    const {version, setVersion} = Store.useContainer();
    return <div>
        <div>
            <button type={'button'} onClick={() => setVersion(n => n + 1)}>Re-render ({version})</button>
        </div>
    </div>
})
