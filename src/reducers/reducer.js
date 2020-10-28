const initialState = {
    url: '',
    toggleStic: false,
    ariaText: '',
    posts: [],
    trig: true,
    modal: false,
    ariaTextModal: '',
    urlMod: '',
    marks: [],
    avaUrl: '',
    bgUrl: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OUT":
            let file = action.file;
            
            return {
               ...state,
               url: file
            }
        
        case "OUTM":
            const fileM = action.file;
            
            return {
                ...state,
                urlMod: fileM
            }

        case "SHOW_STIC":
            return {
                ...state,
                toggleStic: !state.toggleStic
            }

        case 'SHOW_TEXT':
            const emoji = action.onTarget;
            document.querySelector('.ariaMes').value += emoji;
            state.ariaText += emoji;
            
            return {
                ...state
            }

        case 'ADD_EMOJI_MODAL':
            const emojiModal = action.onTarget;
            document.querySelector('.ariaMesMod').value += emojiModal;
            state.ariaTextModal += emojiModal;
            
            return {
                ...state
            }
        
        case 'CLC':
            let myImg = state.url;
            let myDescription = state.ariaText;
            let selectMark = false;
            let selectLike = false;

            if (myDescription.length === 0) {
                alert('Fill in the fields');
            } else {
                state.posts.push({
                    myUrl: myImg,
                    myText: myDescription,
                    mark: selectMark,
                    like: selectLike
                })
            }

            return {
                ...state,
                trig: !state.trig
            }

        case 'CLCM':
            let myImgMod = state.urlMod;
            let myDescriptionMod = state.ariaTextModal;
            let selectMarkMod = false;
            let selectLikeMod = false;

            if (myDescriptionMod.length === 0) {
                alert('Fill in the fields');
            } else {
                state.posts.push({
                    myUrl: myImgMod,
                    myText: myDescriptionMod,
                    mark: selectMarkMod,
                    like: selectLikeMod
                })
            }

            return {
                ...state,
                posts: [...state.posts]
            }

        case 'STRT':
            let text = action.onText;
            let textMod = action.onTextMod;

            return {
                ...state,
                ariaText: text,
                ariaTextModal: textMod
            }

        case 'CLEAR':
            const onTextClear = action.onTextClear;
            const onImgClear = action.onImgClear;

            onTextClear.value = '';
            onImgClear.src = '';

            return {
                ...state,
                url: '',
                ariaText: ''
            }

        case 'CLEARM':
            const onTextClearMod = action.onTextClearMod;
            const onImgClearMod = action.onImgClearMod;

            onTextClearMod.value = '';
            onImgClearMod.src = '';

            return {
                ...state,
                urlMod: '',
                ariaTextModal: ''
            }

        case 'MARKC':
            const iMark = action.onMark;
            const elemMark = state.posts[iMark];
            elemMark.mark = !elemMark.mark;

            return {
                ...state,
                posts: [...state.posts]
            }

        case 'LIKEC':
            const iLike = action.onLike;
            const elemLike = state.posts[iLike];
            elemLike.like = !elemLike.like;

            return {
                ...state,
                posts: [...state.posts]
            }

        case 'MOD':
            return {
                ...state,
                modal: !state.modal
            }

        case 'CLMOD':
            const targetMod = action.onTargetMod;

            if (targetMod === document.querySelector('.wrapper_modal')){
                state.modal = false;
            }

            return {
                ...state,
                modal: state.modal
            }

        case 'MARK_SET':
            const index = action.targetMark;
            const elem = state.posts[index]; 
        
            state.marks.push(elem);
        
            const newMarkArr = state.marks.filter((item, pos) => {
                return state.marks.indexOf(item) === pos;
            });

            if (!newMarkArr[newMarkArr.indexOf(elem)].mark) {
                newMarkArr.splice(newMarkArr.indexOf(elem), 1);
            }

            return {
                ...state,
                marks: [...newMarkArr]
            }

        case 'AVA_URL':
            state.avaUrl = action.avaUrl;

            return {
                ...state
            }

        case 'BG_URL':
            state.bgUrl = action.bgUrl;
            
            return {
                ...state
            }

        case 'GET_STYLE':
            console.log(window.getComputedStyle(document.querySelector('.App_section-content'),null).getPropertyValue("height"));
        
            return {
                ...state
            }

        default:
            return state;
    }
}

export default reducer;