import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentInfoSchema } from '../types/StudentInfoSchema';
import { ToggleOptions } from '../types/toggleOptions';

const initialState: StudentInfoSchema = {
    option: ToggleOptions.Portfolio,
    options: Object.values(ToggleOptions),
};

export const StudentInfoSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setOption: (state, action: PayloadAction<StudentInfoSchema['option']>) => {
            state.option = action.payload;
        },
    },
});

export const { actions: studentInfoActions } = StudentInfoSlice;
export const { reducer: studentInfoReducer } = StudentInfoSlice;
