import { Link, Stack, Typography } from "@mui/material";

export const ContactsPage = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h3">Свяжитесь с нами</Typography>
      <Typography>
        💖 Мы поможем сделать анализ по вашей подборке каналов.
      </Typography>
      <Typography>💝 Чтобы сказать, что работает или не работает.</Typography>
      <Typography>
        💞 Если у вас есть идеи, какой функционал можно добавить.
      </Typography>
      <Typography>
        💘 Если хотите сотрудничать и развивать этот инструмент в любой форме.
      </Typography>

      <Link href="mailto:example@example.com" underline="none">
        <Typography variant="h6">oplotcoordinator@gmail.com</Typography>
      </Link>
    </Stack>
  );
};
