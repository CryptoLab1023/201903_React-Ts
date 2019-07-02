import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

export const APP_NAME: string = 'Test Application'
export const APP_URL: string = ''
export const BASE_URL: string = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : APP_URL

export const WEB_SOCKET_PORT: string = 'http://localhost'
export const WEB_SOCKET_URL: string = '8080'

interface ISideBar {
    name: string
    icon: any
    link: string
}

export const sideBar: ISideBar[] = [
    { name: 'Inbox', icon: InboxIcon, link: '/' },
    { name: 'Starred', icon: InboxIcon, link: '/favorite' },
    { name: 'Send email', icon: InboxIcon, link: '/email' },
    { name: 'Drafts', icon: MailIcon, link: '/draft' },
    { name: 'All mail', icon: InboxIcon, link: '/all' },
    { name: 'Trash', icon: MailIcon, link: '/trash' },
    { name: 'Spam', icon: InboxIcon, link: '/span' },
]

export const handleError = (e: { message: string; fileName: string; lineNumber: string; stack: string }) => {
    let errMsg = '【エラーが発生しました】\n'
    errMsg += 'メッセージ：' + e.message + '\n'

    if (e.fileName && e.lineNumber) {
        errMsg += 'ファイル名：' + e.fileName + '、 行番号：' + e.lineNumber + '\n'
    }

    if (e.stack) {
        errMsg += '------ Stack Trace： ------\n'
        errMsg += e.stack + '\n'
        errMsg += '---------------------------\n'
    }

    console.error(errMsg)
}
