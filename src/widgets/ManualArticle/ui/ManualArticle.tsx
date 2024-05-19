import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

interface ManualArticleProps {
    readonly title?: string;
}

export const ManualArticle = memo((props: ManualArticleProps) => {
    const { title } = props;

    return (
        <Stack spacing={4}>
            <Stack spacing={4}>
                <Typography variant="h2">О наукометрических базах</Typography>
                <Stack spacing={2}>
                    <Typography>
                        Для размещения публикаций молодые и опытные исследователи выбирают журналы и сборники, которые
                        входят в наукометрические базы данных. Это перечни индексируемых изданий, помогающие оценить
                        эффективность научной деятельности ученого на основании различных количественных показателей.
                    </Typography>
                    <Typography>
                        В наукометричекие базы данных входят журналы, соответствующие высоким критериям и соблюдающие
                        определенные условия. В таких изданиях публикуют только качественные статьи, которые написаны и
                        оформлены по строгим требованиям.
                    </Typography>
                    <Typography>
                        Существуют российские и международные площадки, у каждой есть свои особенности и отличия, узнать
                        о которых можно дальше в статье.
                    </Typography>
                </Stack>
            </Stack>
            <Stack spacing={3}>
                <Typography variant="h3">Наукометрические базы — что это и зачем нужны?</Typography>
                <Stack spacing={2}>
                    <Typography>
                        Для оценивания успешности ученых используют качественные и количественные показатели. В основе
                        качественных лежат выводы экспертов из различных областей знаний. Такой метод трудно назвать
                        достоверным, ведь подобные оценки субъективны – мнения ученых по одним и тем же вопросам могут
                        сильно расходиться.
                    </Typography>
                    <Typography>
                        К количественным показателям относят публикуемые материалы – количество публикаций и частота их
                        цитирований, число премий, стипендий, грантов,индекс Хирша, импакт-фактор, участие в составе
                        редколлегии, сотрудничество с иностранными партнерами. Основными показателями успешности ученого
                        считаются
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
});