import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core';
const ReusableSwitch = (props) => {
    return (
        <>
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label={props.name}
                labelPlacement="end"
            />
        </>
    )
}

export default ReusableSwitch
