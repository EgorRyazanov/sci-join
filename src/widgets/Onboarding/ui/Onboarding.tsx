import { Box, Stack } from '@mui/material';
import { memo, useCallback, useRef, useState } from 'react';

import { UploadAvatar, useGetAvatar } from 'features/avatar';
import { BaseButton, TabsWithStatus } from 'shared/ui';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { PersonalInfoForm } from './PersonalInfoForm/PersonalInfoForm';
import { onboardingReducer } from '../model/slice/onboardingSlice';
import styles from './Onboarding.module.scss';

const initialReducers: ReducersList = {
    onboarding: onboardingReducer,
};

const values = ['1', '2', '3'];
const subTitles = ['Шаг 1', 'Шаг 2', 'Шаг 3'];
const titles = ['Личные данные', 'Научное портфолио', 'Статус поиска'];
const ERROR_TEXT = 'Произошла ошибка';

export const Onboarding = memo(() => {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTabValue, setActiveTabValue] = useState<(typeof values)[number]>(values[0]);
    const [successTabValue, setSuccessTabValue] = useState<typeof values>([]);
    const [errors, setErrors] = useState<null | Record<(typeof values)[number], string>>(null);
    const { data: avatarUrl, isLoading: isAvatarLoading } = useGetAvatar();

    const formRef = useRef<null | HTMLFormElement>(null);

    const submit = useCallback(() => {
        if (formRef && formRef.current) {
            formRef.current.requestSubmit();
        }
    }, []);

    const onSuccess = useCallback(
        (currentValue: (typeof values)[number], nextValue?: (typeof values)[number]) => {
            setIsLoading(false);
            if (nextValue) {
                setActiveTabValue(nextValue);
            }
            setSuccessTabValue([...successTabValue, currentValue]);
        },
        [successTabValue],
    );

    const onError = useCallback(
        (value: (typeof values)[number]) => {
            setIsLoading(false);
            setErrors({
                [value]: ERROR_TEXT,
            });
        },
        [setIsLoading],
    );

    const onRequestStart = useCallback(() => {
        setIsLoading(true);
        setErrors(null);
    }, [setIsLoading]);
    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <Box>
                <TabsWithStatus
                    errors={errors ?? undefined}
                    titles={titles}
                    subTitles={subTitles}
                    values={values}
                    activeValue={activeTabValue}
                    successValues={successTabValue}
                />
                <Stack spacing={2} className={styles.formsContainer}>
                    <Box className={styles.formWrapper}>
                        {activeTabValue === values[0] && (
                            <Stack direction="row" spacing={4} sx={{ flex: 1 }}>
                                <UploadAvatar isAvatarGetting={isAvatarLoading} url={avatarUrl} />
                                <PersonalInfoForm
                                    onError={() => onError(values[0])}
                                    onSuccess={() => onSuccess(values[0], values[1])}
                                    onRequestStart={onRequestStart}
                                    ref={formRef}
                                />
                            </Stack>
                        )}
                    </Box>
                    <Stack className={styles.actionsContainer} direction="row-reverse" justifyContent="space-between">
                        <BaseButton disabled={isLoading} type="submit" onClick={submit} variant="contained">
                            Далее
                        </BaseButton>
                        {/* {values[0] !== activeTabValue && (
                            <BaseButton disabled={isLoading} variant="outlined">
                                Назад
                            </BaseButton>
                        )} */}
                    </Stack>
                </Stack>
            </Box>
        </DynamicModuleLoader>
    );
});
