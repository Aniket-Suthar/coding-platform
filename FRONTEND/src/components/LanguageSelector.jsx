import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  IconButton
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";
import { useNavigate } from 'react-router-dom';
import CottageIcon from '@mui/icons-material/Cottage';


const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  const navigateTo = useNavigate(); // Initialize useHistory

  // Function to handle "Practice" button click
  const handleHome = () => {
    // Navigate to the '/practice' route
    navigateTo('/');
  };
  return (
    <Box ml={2} mb={3}>
      <a onClick={handleHome}
        style={{ fontWeight: "bold", fontSize: "2rem", marginTop: '-4rem', color: "white" }}><CottageIcon sx={{ fontSize: 40 }} style={{ marginTop: '-1rem', color: "white" }} />&nbsp;Code Playground</a>

      <Menu isLazy>
        <Text fontSize="lg" color="white">
          Language:  <MenuButton as={Button}>{language}</MenuButton>
        </Text>
        <MenuList bg="white">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.200" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.200",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;
