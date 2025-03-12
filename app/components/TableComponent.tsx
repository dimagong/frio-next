'use client'

import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { IBlog, ITable } from '../interfaces/interfaces'

export const TableComponent = ({ blogs }: ITable) => {
    const router = useRouter()
    const sortBlogs = [...blogs].sort(
        (a, b) =>
            moment(a.updated_at).valueOf() - moment(b.updated_at).valueOf()
    )

    const redirectToBlog = (blog: IBlog) => () => {
        console.log('Blog-click====', blog)
        router.push(`/blog/${blog.id}`)
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Updated
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortBlogs.map((blog) => {
                        return (
                            <tr
                                key={blog.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                onClick={redirectToBlog(blog)}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <Image
                                        src={blog.featured_image}
                                        alt={blog.user.username}
                                        width={40}
                                        height={40}
                                        priority={true}
                                        className="rounded-full aspect-square object-cover w-10 h-10"
                                    />
                                </th>
                                <td className="px-6 py-4">
                                    {blog.user.username}
                                </td>
                                <td className="px-6 py-4">{blog.category}</td>
                                <td className="px-6 py-4">{blog.title}</td>
                                <td className="px-6 py-4">{blog.updated_at}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
