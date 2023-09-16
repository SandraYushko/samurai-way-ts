export type MessagesPropsType = {
    id: number,
    message: string
}
export type DialogsPropsType = {
    id: number,
    name: string
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
            {id:1, name:"Sasha"},
            {id:2, name:"Masha"},
            {id:3, name:"Dasha"},
            {id:4, name:"Kate"},
            {id:5, name:"Svetlana"}
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