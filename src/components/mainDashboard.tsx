import React from 'react'

export const MainDashboard = (props: any) => (
    <div>
        <p>Welcome, {props.authSession.user.username}!</p>
    </div>
);