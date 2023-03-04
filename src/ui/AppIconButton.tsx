import React, {FC, ReactNode} from 'react';
import IconButton from "@mui/material/IconButton";
import {useTheme} from "@mui/material";

type AppIconButtonVariantType = 'dark' | 'light'
interface AppIconButtonProps {
    variant: AppIconButtonVariantType;
    children: ReactNode
}

const AppIconButton: FC<AppIconButtonProps> = ({variant = 'light', children}) => {
    const theme = useTheme()
    return (
        <IconButton sx={variant === 'dark' ? {color: theme.palette.darkText.light, '&:hover': {color: theme.palette.purple.main}} : {} }>
            {children}
        </IconButton>
    );
};

export default AppIconButton;