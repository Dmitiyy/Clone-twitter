const outImg = (file) => {
    return {
        type: 'OUT',
        file: file
    }
}

const showStickers = () => {
    return {
        type: 'SHOW_STIC'
    }
}

const showInputText = (target) => {
    return {
        type: 'SHOW_TEXT',
        onTarget: target
    }
}

const handleClick = () => {
    return {
        type: 'CLC'
    }
}

const handleClickMod = () => {
    return {
        type: 'CLCM'
    }
}

const storeText = (target, textMod) => {
    return {
        type: 'STRT',
        onText: target,
        onTextMod: textMod
    }
}

const clear = (text, img) => {
    return {
        type: 'CLEAR',
        onTextClear: text,
        onImgClear: img
    }
}

const clearMod = (text, img) => {
    return {
        type: 'CLEARM',
        onTextClearMod: text,
        onImgClearMod: img
    }
}

const changeMark = (mark) => {
    return {
        type: 'MARKC',
        onMark: mark
    }
}

const changeLike = (like) => {
    return {
        type: 'LIKEC',
        onLike: like
    }
}

const openModal = () => {
    return {
        type: 'MOD'
    }
}

const closeModal = (event) => {
    return {
        type: 'CLMOD',
        onTargetMod: event
    }
}

const addEmojiMod = (target) => {
    return {
        type: 'ADD_EMOJI_MODAL',
        onTarget: target
    }
}

const outImgModal = (file) => {
    return {
        type: 'OUTM',
        file: file
    }
}

const setComponentActive = (wrapper) => {
    return {
        type: 'SET_COMPONENT',
        wrapTitle: wrapper
    }
}

const setMark = (targetMark) => {
    return {
        type: 'MARK_SET',
        targetMark: targetMark
    }
}

const setAvaProfile = (url) => {
    return {
        type: 'AVA_URL',
        avaUrl: url
    }
}

const setBgProfile = (url) => {
    return {
        type: 'BG_URL',
        bgUrl: url
    }
}

const getStyle = (elem) => {
    return {
        type:'GET_STYLE',
        onElem: elem
    }
}

export {outImg, showStickers, showInputText, handleClick, storeText, clear, changeMark, changeLike, openModal, closeModal, addEmojiMod, outImgModal,handleClickMod, clearMod, setComponentActive, setMark, setAvaProfile, setBgProfile, getStyle};