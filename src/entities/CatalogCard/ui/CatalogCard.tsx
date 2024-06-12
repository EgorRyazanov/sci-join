import { memo, useMemo } from 'react';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BaseChip } from '@/shared/ui/Chip/Chip';
import { LimitInfo } from '@/shared/ui/LimitInfo/LimitInfo';
import { AddProfessorButton, AddStudentButton, AddToFavoritesButton } from '@/features/entity/AddRequests';
import { WorkStatusRus } from '@/entities/ScientificWork/model/types/workStatus';
import { getParentLink } from '@/entities/CatalogCard/lib/helpers/getParentLink';
import scientificWorkImage from '@/shared/assets/images/scientificWork.png';
import { CatalogOptions } from '@/entities/CatalogList';
import { ChipsGroup } from '@/shared/ui';
import { getChipColorByWorkStatus } from '@/shared/lib/helpers/getChipColorByStatus';
import { type ICatalogCard } from '../model/types/ICatalogCard';
import styles from './CatalogCard.module.scss';

/* eslint-disable no-nested-ternary */

export const CatalogCard = memo((props: ICatalogCard) => {
    const {
        id,
        title,
        chips,
        subtitle,
        avatarImagePath,
        limit,
        fullness,
        workStatus,
        option,
        isFavorite,
        canJoin,
        commandSearching,
        professorSearching,
    } = props;

    const parentLink = useMemo(() => getParentLink(option), [option]);

    return (
        <Paper className={styles.card} sx={{ borderRadius: 4 }}>
            <Avatar
                src={workStatus ? scientificWorkImage : __API__ + avatarImagePath}
                alt={title}
                sx={{ width: 1, height: 1, borderRadius: 3 }}
            />
            <Stack spacing={2} overflow="hidden">
                <Stack spacing={1}>
                    {workStatus ? (
                        <BaseChip
                            label={WorkStatusRus[workStatus]}
                            sx={{
                                alignSelf: 'flex-start',
                                backgroundColor: getChipColorByWorkStatus(workStatus),
                            }}
                        />
                    ) : (
                        <Typography variant="subtitle1" color="secondary">
                            {subtitle}
                        </Typography>
                    )}
                    <Link to={`/${parentLink}/${id}`} color="inherit">
                        <Typography variant="h3">{title}</Typography>
                    </Link>
                </Stack>
                <ChipsGroup chips={chips} maxCount={4} />
            </Stack>
            <Stack spacing={1} alignSelf="flex-end" alignItems="flex-end">
                <LimitInfo limit={limit} fullness={fullness} />
                {option === CatalogOptions.Professors ? (
                    <AddProfessorButton id={id} canJoin={Boolean(canJoin)} />
                ) : option === CatalogOptions.Students ? (
                    <AddStudentButton
                        id={id}
                        commandSearching={Boolean(commandSearching)}
                        professorSearching={Boolean(professorSearching)}
                    />
                ) : (
                    <BaseChip label="Сделать запрос" />
                )}

                <AddToFavoritesButton id={id} isFavorite={isFavorite} option={option} />
            </Stack>
        </Paper>
    );
});
