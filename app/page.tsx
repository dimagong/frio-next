import { PaginationComponent } from './components/PaginationComponent'
import { TableComponent } from './components/TableComponent'

export default async function Home(props: {
    searchParams?: Promise<{
        page?: string
    }>
}) {
    const searchParams = await props.searchParams
    const currentPage = Number(searchParams?.page) || 1
    const data = await fetch(
        `https://jsonfakery.com/blogs/paginated?page=${currentPage}`
    )
    if (!data.ok) {
        //todo error handler
        throw new Error('Failed to fetch data')
    }
    const blogs = await data.json()
    console.log('post===', blogs)

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <TableComponent blogs={blogs.data} />
                <div className=" flex justify-center w-full">
                    <PaginationComponent currentPage={currentPage} />
                </div>
            </main>
        </div>
    )
}
