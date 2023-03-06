import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {FC} from "react";


interface DropdownObject {
    key: string;
    title: string;
}

interface DropDownProps {
    objects: DropdownObject[];
    defaultSortKey: string;
    setSelectedSort: (sortType: string) => void;
}

const DropDown: FC<DropDownProps> = ({objects, defaultSortKey, setSelectedSort }) => {
    const [sortType, setSortType] = React.useState<string>(defaultSortKey);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string;
        setSortType(value);
        setSelectedSort(value)
    };

    return (
        <Box sx={{alignSelf: "flex-end", minWidth: 120}}>
            <FormControl sx={{ m: 1, minWidth: 230 }} size="small">
                <Select
                    value={sortType}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {objects.map(({key, title}) =>
                        <MenuItem key={key} value={key}>{title}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

export default DropDown;