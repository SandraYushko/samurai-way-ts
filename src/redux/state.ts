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
export type DalogsPagePropsType = {
    dialogs: Array<DialogsPropsType>,
    messages: Array<MessagesPropsType>
}
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
}
export type SidebarPropsType = {}
export type RootStatePropsType = {
    profilePage: ProfilePagePropsType,
    dialogsPage: DalogsPagePropsType,
    sidebar: SidebarPropsType
}


let state: RootStatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 3},
            {id: 3, message: '+++', likesCount: 50}
        ]
    },
    dialogsPage: {
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