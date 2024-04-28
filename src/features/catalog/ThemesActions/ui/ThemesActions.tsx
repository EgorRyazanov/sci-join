import { BaseButton } from 'shared/ui/Button/Button';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import React from 'react';
import { Stack } from '@mui/material';
import { NewScientificWorkModal } from 'features/catalog/NewScientificWork';

export const ThemesActions = () => (
    <Stack direction="row" spacing={2}>
        <BaseButton sx={{ p: 1 }} variant="shadowed">
            <SortRoundedIcon />
        </BaseButton>
        <NewScientificWorkModal />
    </Stack>
);
