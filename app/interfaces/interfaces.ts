export interface IUser {
    id: string
    first_name: string
    middle_name: string
    last_name: string
    email: string
    address_id: string
    contact_id: string
    created_at: string
    email_verified_at: null | string
    profile_pic: string
    role: string
    updated_at: string
    username: string
}

export interface IBlog {
    category: string
    comments: string[]
    created_at: string
    featured_image: string
    id: string
    main_content: string
    subtitle: string
    summary: string
    tags: []
    title: string
    updated_at: string
    user: IUser
    user_id: string
}

export interface ITable {
    blogs: IBlog[]
}
