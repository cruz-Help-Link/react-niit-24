import React, { useState } from "react";
import { Drawer, Button, List, ListItem, ListItemText } from "@mui/material";

export default function Drawernav() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => () => {
        setOpen(isOpen);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    );
}
