import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './hidestyle.css'

const Featureshide = () => {
    const [state, setState] = useState(false)
    const [statething, setStatething] = useState(false)
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button className="button-1" onClick={() => setState(!state)}> Features </button>
                {
                    state &&
                    <div className="hide-text">
                        WHY DID YOU CLICK HERE
                    </div>
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button className="button-2" onClick={() => setStatething(!statething)}>Team</button>
                {
                    statething &&
                    <div className="hide-text-2">
                        WHY DID YOU CLICK HERE 2
                    </div>
                }
            </div>
            <Router>
                <Switch>
                    <Link to="/signup" className="link-signup">Sing up </Link>
                    <Route path="/singup"></Route>
                </Switch>
            </Router>
        </>
    )
}

export default Featureshide