export const isUploader = () => {
    return process.env.REACT_APP_MODE === 'uploader'
}

export const isDownloader = () => {
    return process.env.REACT_APP_MODE === 'downloader'
}

export const isModeNull = () => {
    return !process.env.REACT_APP_MODE
}

export const isDevelopment = () => {
    return process.env.NODE_ENV === 'development'
}

export const isProduction = () => {
    return process.env.NODE_ENV === 'production'
}

export const provideComponent = (modeNullArg: any, uploadDevArg: any, downloadDevArg: any, uploadProdArg: any, downloadProdArg: any, finalArg: any) => {
    if (isModeNull()) {
        return modeNullArg
    } else {
        if (isDevelopment()) {
            if (isUploader()) {
                return uploadDevArg
            } else if (isDevelopment() && isDownloader()) {
                return downloadDevArg
            }
        } else if (isProduction()) {
            if (isUploader()) {
                return uploadProdArg
            } else if (isDownloader()) {
                return downloadProdArg
            }
        }
    }
    return finalArg
}
