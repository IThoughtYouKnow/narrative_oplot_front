import { Stack, Typography } from "@mui/material";
import { RouterLink } from "@src/components/common/RouterLink";

export const AboutPage = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h3">О проекте "Сканер нарративов"</Typography>

      <Typography>
        Перед вами инструмент для обнаружения{" "}
        <RouterLink to="methodology">нарративов</RouterLink> государственной
        пропаганды в телеграм-каналах на русском языке.
      </Typography>
      <Typography>
        Сканер будет полезен исследователям, журналистам и активистам, изучающим
        медиа, пропаганду или хейт-спич. С его помощью можно автоматизировать
        часть работы по обнаружению распространённых пропагандистских нарративов
        в телеграме. Как его можно использовать:
      </Typography>
      <ul>
        <li>
          <Typography>
            для поиска отдельных пропагандистских сообщений
          </Typography>
        </li>
        <li>
          <Typography>для анализа больших данных</Typography>
        </li>
      </ul>
      <Typography>
        Наш Сканер основан на модели машинного обучения, натренированной
        отслеживать пять определённых нами{" "}
        <RouterLink to="methodology">нарративов</RouterLink>. Во вкладке
        “Примеры использования” вы увидите данные по 12 популярным новостным{" "}
        <RouterLink to="methodology">телеграм-каналам</RouterLink>, известным
        своей провоенной позицией.{" "}
        <RouterLink to="contacts">Связавшись с нами</RouterLink>, вы сможете
        исследовать любые другие доступные телеграм-каналы на том же наборе
        нарративов.
      </Typography>
      <Typography>Воспользоваться Сканером можно тремя способами:</Typography>

      <Stack gap={2}>
        <RouterLink to="examples" underline="hover" withIcon>
          <Typography> ознакомиться с нашими примерами анализа</Typography>
        </RouterLink>
        <RouterLink to="download" underline="hover" withIcon>
          <Typography>
            скачать модель и/или данные для самостоятельного анализа
          </Typography>
        </RouterLink>
        <RouterLink to="contacts" underline="hover" withIcon>
          <Typography>
            получить доступ к расширенной функциональности сайта
          </Typography>
        </RouterLink>
      </Stack>
    </Stack>
  );
};
