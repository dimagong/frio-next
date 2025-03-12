import { IBlog } from '../interfaces/interfaces'
import Image from 'next/image'

interface IBlogComponent {
    blog: IBlog
}

export const BlogComponent = ({ blog }: IBlogComponent) => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        {blog.title}
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        {blog.subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article
                        key={blog.id}
                        className="flex max-w-xl flex-col items-start justify-between"
                    >
                        <div className="flex items-center gap-x-4 text-xs">
                            <time
                                dateTime={blog.created_at}
                                className="text-gray-500"
                            >
                                {blog.created_at}
                            </time>
                            <a
                                href="#"
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {blog.category}
                            </a>
                        </div>

                        <div className="relative mt-8 flex items-center gap-x-4">
                            <Image
                                alt=""
                                src={blog.featured_image}
                                width={10}
                                height={10}
                                className="size-10 rounded-full bg-gray-50"
                            />
                            <div className="text-sm/6">
                                <p className="font-semibold text-gray-900">
                                    <a href="#">
                                        <span className="absolute inset-0" />
                                        {blog.user.first_name +
                                            ' ' +
                                            blog.user.last_name}
                                    </a>
                                </p>
                                <p className="text-gray-600">
                                    {blog.user.role}
                                </p>
                            </div>
                        </div>
                        <div className="group relative">
                            <div
                                className="mt-5 line-clamp-3 text-sm/6 text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: blog.main_content,
                                }}
                            ></div>
                            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                                {blog.summary}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
