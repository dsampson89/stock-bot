import React, { Component } from 'react';
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="footer-copyright text-center py-3">© 2020 Copyright</div>
                </footer>
            </div>
        )
    }
}
