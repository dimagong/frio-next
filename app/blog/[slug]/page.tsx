import { BlogComponent } from '@/app/components/BlogComponent'
import { IBlog } from '@/app/interfaces/interfaces'

export default async function Blog({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const data = await fetch(`https://jsonfakery.com/blogs`)
    const blogs: IBlog[] = await data.json()
    const findBlog = blogs.find((blog) => blog.id === slug)

    return (
        <div>
            {findBlog ? (
                <BlogComponent blog={findBlog} />
            ) : (
                'This blog does not exist'
            )}
        </div>
    )
}
