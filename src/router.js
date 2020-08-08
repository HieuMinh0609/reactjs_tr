import React from 'react';
import ListRoundTestContainer from './Containers/competition/listRoundTestContainer';
import LoginContainer from './Containers/loginContainer';
import NotFound from './components/notFound';
const routes = [
    {
        path: '/',
        exact: true,
        main: ({location }) => <LoginContainer location={location} />
    },
    {
        path: '/competition/:idCompetition/list-round-test',
        exact: false,
        main: ({ match }) => <ListRoundTestContainer match={match}  />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    },
];

export default routes;