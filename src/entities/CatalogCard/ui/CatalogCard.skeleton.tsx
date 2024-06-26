import { memo, useCallback } from 'react';
import { Paper, Skeleton, Stack, Typography } from '@mui/material';
import { BaseList } from '@/shared/ui/List/List';
import styles from './CatalogCard.module.scss';

export const CatalogCardSkeleton = memo(() => {
    const render = useCallback(
        (item: number) => (
            <Skeleton
                key={item}
                variant="rectangular"
                width={`${Math.floor(Math.random() * (40 - 20 + 1)) + 10}%`}
                height={28}
                sx={{ borderRadius: 100 }}
            />
        ),
        [],
    );

    return (
        <Paper className={styles.card} sx={{ borderRadius: 4 }}>
            <Skeleton variant="rectangular" sx={{ width: 1, height: 1, borderRadius: 3 }} />
            <Stack spacing={2} justifyContent="space-between">
                <Stack spacing={1}>
                    <Typography variant="subtitle1" color="secondary" width="30%">
                        <Skeleton />
                    </Typography>
                    <Typography variant="h3" width="40%">
                        <Skeleton />
                    </Typography>
                </Stack>
                <BaseList className={styles.chips} items={[0, 1, 2]} render={render} />
            </Stack>
        </Paper>
    );
});
