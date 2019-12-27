import React, {useEffect, useState} from "react";

export function Renderer({text}) {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setTimeout(() => setValue(text), 3000)
    }, [])

    return value
}