import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {FormGroup} from "react-bootstrap";

class GarageDoorListProps {
    garageDoors: any[];
    triggerOpener: () => void;
};

const GarageDoorList = (props: GarageDoorListProps) => (
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Last seen date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.garageDoors != null ? props.garageDoors.map(garageDoor => (
                <tr key={garageDoor.id}>
                    <td>{garageDoor.id}</td>
                    <td>{garageDoor.status}</td>
                    <td>{garageDoor.last_seen_date}</td>
                    <td>
                        <a href="javascript:void(0)" onClick={props.triggerOpener.bind(this, garageDoor.id)}>
                            {garageDoor.status === "closed" || garageDoor.status === "closing" ? "Open" : "Close"}
                        </a>
                    </td>
                </tr>)) : null}
        </tbody>
    </table>
);

export default GarageDoorList;