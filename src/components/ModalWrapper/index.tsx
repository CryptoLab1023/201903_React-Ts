import * as React from 'react'
import Modal from '@material-ui/core/Modal/Modal'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button/Button'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { IOwnProps } from './interface'

const styles = (theme: Theme) => {
    return createStyles({
        paper: {
            position: 'absolute',
            width: theme.spacing.unit * 50,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing.unit * 4,
        },
    })
}

type IProps = IOwnProps & WithStyles<typeof styles>

const ModalWrapper: React.SFC = (props: IProps) => {
    const { classes, className, width, body, title, showModal, handleModal, children, handleSubmit } = props

    return (
        <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={showModal} onClose={handleModal}>
            <div
                style={{
                    left: '50%',
                    top: '50%',
                    width,
                    transform: 'translate(-50%,-50%)',
                }}
                className={classNames(className, classes.paper)}>
                <Typography variant="title" id="modal-title" gutterBottom={true} align="center">
                    {title}
                </Typography>
                <Typography variant="body1" id="modal-body1" gutterBottom={true} align="center">
                    {body}
                </Typography>
                {children}
                <div className="modal_qa">
                    <div className="answer">
                        <Button
                            variant="contained"
                            className="yes"
                            onClick={() => {
                                handleSubmit()
                                handleModal()
                            }}>
                            Yes
                        </Button>
                        <Button variant="contained" className="no" onClick={() => handleModal()}>
                            No
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default withStyles(styles)(ModalWrapper)
