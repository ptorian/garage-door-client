import React from 'react'

export const MainDashboard = (props: any) => (
    <div>
        <p>Welcome, {props.authSession.user.email}!</p>
    </div>
);