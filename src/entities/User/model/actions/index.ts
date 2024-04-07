import { createAction } from '@reduxjs/toolkit';
import { AppError } from 'shared/lib/types/appError';
import { User } from '../types/user';

const name = 'user';

export const actions = {
    successUser: createAction<User>(`${name}/successUser`),
    requestUser: createAction(`${name}/requestUser`),
    failureUser: createAction<string>(`${name}/failureUser`),
    successRefresh: createAction(`${name}/successRefresh`),
    requestRefresh: createAction(`${name}/requestRefresh`),
    failureRefresh: createAction<string>(`${name}/failureRefresh`),
};
