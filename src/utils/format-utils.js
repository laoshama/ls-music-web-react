export function getFormatCount(count) {
    if (count < 10000) {
        return count
    } else if (count < 100000000) {
        return (Math.round(count/1000)/10).toFixed(1) + '万';
    } else {
        return (Math.round(count/10000000)/10).toFixed(1) + '亿';
    }
}

export function getSizeImage(imgUrl, size) {
    return `${imgUrl}?param=${size}x${size}`
}