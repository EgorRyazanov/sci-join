import { memo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStudentInfoOption } from '@/widgets/StudentInfo/model/selectors/getStudentInfoOption/getStudentInfoOption';
import { StudentCard, useGetStudentQuery } from '@/entities/Student';
import { ToggleStudentInfo } from '@/features/student/ToggleInfo';
import { AddStudentButton, AddToFavoritesButton } from '@/features/entity/AddRequests';
import { CatalogOptions } from '@/entities/CatalogList';
import { ToggleOptions } from '../model/types/toggleOptions';
import { StudentInfoSkeleton } from './StudentInfo.skeleton';
import { StudentPortfolio } from './StudentPortfolio';
import { StudentThemes } from './StudentThemes';

export const StudentInfo = memo(() => {
    const { id } = useParams();
    const option = useSelector(getStudentInfoOption);

    const { isFetching, data } = useGetStudentQuery({ id: id! });

    if (isFetching) {
        return <StudentInfoSkeleton />;
    }

    if (!data) {
        return <Typography variant="body2">Информации отсутствует</Typography>;
    }

    return (
        <Grid container gap={3}>
            <Grid item xs={2.8}>
                <Stack spacing={3}>
                    <StudentCard {...data} />
                    <Stack spacing={1} alignItems="center">
                        <AddStudentButton
                            id={id!}
                            commandSearching={data.commandSearching}
                            professorSearching={data.professorSearching}
                        />
                        <AddToFavoritesButton id={id!} isFavorite={data.isFavorite} option={CatalogOptions.Students} />
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs>
                <Stack spacing={4} alignItems="flex-start">
                    <ToggleStudentInfo />
                    {option === ToggleOptions.Portfolio ? <StudentPortfolio {...data} /> : <StudentThemes id={id!} />}
                </Stack>
            </Grid>
        </Grid>
    );
});
