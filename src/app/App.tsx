import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { getUserInited } from 'entities/User';
import { getUser } from 'entities/User/model/services/getUser';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const isInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{isInited && <AppRouter />}</>;
}

export default App;
