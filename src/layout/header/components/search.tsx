import { Box } from '@mui/material';
import { IoSearchOutline } from 'react-icons/io5';

export const Search = () => {
  return (
    <Box className="my-4 flex justify-between items-center !border-2 !border-solid bg-gray-100 !border-gray-300 py-2 px-3 rounded-md">
      <input
        type="text"
        className="w-full bg-gray-100 text-black outline-none"
      />
      <IoSearchOutline className="text-2xl text-gray-500 font-bold bg-gray-100" />
    </Box>
  );
};
