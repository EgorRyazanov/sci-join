import { memo } from 'react';
import { Grid, Stack } from '@mui/material';
import { ProfessorCardSkeleton } from '@/entities/Professor';
import { ScientificWorkGeneralSkeleton } from './ScientificWorkGeneral.skeleton';

export const ScientificWorkInfoSkeleton = memo(() => (
    <Grid container gap={3}>
        <Grid item xs={2.8}>
            <ProfessorCardSkeleton />
        </Grid>
        <Grid item xs>
            <Stack spacing={4} alignItems="flex-start">
                <ScientificWorkGeneralSkeleton />
            </Stack>
        </Grid>
    </Grid>
));
