export type MessagesPropsType = {
    id: number,
    message: string
}
export type DialogsPropsType = {
    id: number,
    name: string,
    avatar: string
}
export type PostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}
export type MessagesPagePropsType = {
    dialogs: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>
}
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
}
export type SidebarPropsType = {}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType
    messagesPage: MessagesPagePropsType
    sidebar: SidebarPropsType
}
export type MainRootStatePropsType = {
    state: RootStatePropsType
}


let state: RootStatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 3},
            {id: 3, message: '+++', likesCount: 50}
        ]
    },
    messagesPage: {
        dialogs: [
            {id:1, name:"Sasha", avatar: 'https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'},
            {id:2, name:"Masha", avatar: 'https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'},
            {id:3, name:"Dasha", avatar: 'https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'},
            {id:4, name:"Kate", avatar: 'https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'},
            {id:5, name:"Svetlana", avatar: 'https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'}
        ],
        messages: [
            {id:1, message:"Hello"},
            {id:2, message:"How are you?"},
            {id:3, message:"Yo"},
        ]
    },
    sidebar: {}
}

export default state;