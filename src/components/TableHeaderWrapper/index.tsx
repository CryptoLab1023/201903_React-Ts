import * as React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import { IOwnProps } from './interface'

const styles = (theme: Theme) => {
    return createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing.unit * 3,
            overflowX: 'auto',
        },
    })
}

type IProps = IOwnProps & WithStyles<typeof styles>

const TableHeaderWrapper: React.SFC<IProps> = (props: IProps) => {
    const { items } = props
    return (
        <TableHead>
            <TableRow>
                {items.map((item, index) => (
                    <TableCell key={index} numeric={item.numeric} style={{ minWidth: item.width }} component={'th'}>
                        {item.title}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

export default withStyles(styles)(TableHeaderWrapper)
