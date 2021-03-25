import React from "react";
import { withRouter, useHistory } from "react-router-dom";

function Bye () {
    let history = useHistory()

    function mainClick() {
        history.push("/");
    }

    return (
        <div>
            <center>
                <h1>그동안 감사했습니다.</h1>
                <button onClick = {mainClick}> 메인페이지로</button>
            </center>
        </div>
    )
}

export default withRouter(Bye)