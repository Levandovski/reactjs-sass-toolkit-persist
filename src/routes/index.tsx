import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { routesProps } from './interface';
import { routes } from './routes';

export const Routes: React.FC = () => {
    return(
        <Switch>
            {routes.map((e: routesProps) => {
                return <Route key={e.id} path={e.path} element={<e.component />} />
            })}
            <Route path='*' element={<Navigate to='/dashboard' />} />
        </Switch>
    );
}

