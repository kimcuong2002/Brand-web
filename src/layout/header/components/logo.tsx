import { Box, Typography } from '@mui/material';
import { PiHandbagDuotone } from 'react-icons/pi';

export const Logo = () => {
  return (
    <Box className=" text-4xl flex justify-center items-center gap-2">
      <PiHandbagDuotone className="bg-[#0D6EFD] px-2 py- rounded-xl !shadow-2xl" />
      <Typography className="text-[#8CB7F5] !text-3xl !font-bold">
        Brand
      </Typography>
    </Box>
  );
};
