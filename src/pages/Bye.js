import React from "react";
import {Link, Switch, Route, Redirect, withRouter, useHistory } from "react-router-dom";

function Bye () {
    let history = useHistory()

    function mainClick() {
        history.push("/");
    }

    return (
        <div>
            <div>그동안 감사했습니다.</div>
            <button onClick = {mainClick}> 메인페이지로</button>
        </div>
    )
}

export default withRouter(Bye)