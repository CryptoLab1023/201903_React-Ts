import * as React from 'react'
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {createStyles, Theme, WithStyles, withStyles} from "@material-ui/core";
import {OwnProps} from "./interface";

const styles = (theme: Theme) => {
    return createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
    });
};

type Props = OwnProps & WithStyles<typeof styles>;

const TableBodyWrapper: React.SFC<Props> = (props: Props) => {

    const {items} = props;
    return (
        <TableHead>
            {items.map((item, index) => (
                <TableRow key={index}>
                    {item.map((elem, i) => (
                        <TableCell key={i} numeric={elem.numeric} style={{minWidth: elem.width}}>
                            {elem.title}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableHead>
    )
};

export default withStyles(styles)(TableBodyWrapper);
