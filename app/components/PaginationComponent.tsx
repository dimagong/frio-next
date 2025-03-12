'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const TOTAL_BLOGS = 1500
const PER_PAGE = 10
const LAST_PAGE = 150

interface IPagination {
    currentPage: number
}

export const PaginationComponent = ({ currentPage }: IPagination) => {
    const isGetNextPage = () => {
        const recievedBlogsCount = PER_PAGE * currentPage
        return recievedBlogsCount < TOTAL_BLOGS
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{' '}
                        <span className="font-medium">
                            {currentPage - 1 < 1
                                ? 1
                                : (currentPage - 1) * PER_PAGE}
                        </span>{' '}
                        to{' '}
                        <span className="font-medium">
                            {currentPage * PER_PAGE}
                        </span>{' '}
                        of <span className="font-medium">{TOTAL_BLOGS}</span>{' '}
                        results
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                    >
                        <a
                            href={
                                currentPage <= 2
                                    ? '/'
                                    : `?page=${currentPage - 1}`
                            }
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                aria-hidden="true"
                                className="size-5"
                            />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {currentPage > LAST_PAGE - 9 ? null : (
                            <a
                                href={`?page=${
                                    currentPage < LAST_PAGE - 9
                                        ? currentPage
                                        : LAST_PAGE - 9
                                }`}
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {currentPage < LAST_PAGE - 9
                                    ? currentPage
                                    : LAST_PAGE - 9}
                            </a>
                        )}
                        {currentPage > LAST_PAGE - 8 ? null : (
                            <a
                                href={`?page=${
                                    currentPage + 1 < LAST_PAGE - 8
                                        ? currentPage + 1
                                        : LAST_PAGE - 8
                                }`}
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {currentPage + 1 < LAST_PAGE - 8
                                    ? currentPage + 1
                                    : LAST_PAGE - 8}
                            </a>
                        )}
                        {currentPage > LAST_PAGE - 7 ? null : (
                            <a
                                href={`?page=${
                                    currentPage + 2 < LAST_PAGE - 7
                                        ? currentPage + 2
                                        : LAST_PAGE - 7
                                }`}
                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                {currentPage + 2 < LAST_PAGE - 7
                                    ? currentPage + 2
                                    : LAST_PAGE - 7}
                            </a>
                        )}
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                            ...
                        </span>
                        {currentPage > LAST_PAGE - 2 ? null : (
                            <a
                                href={`?page=${
                                    currentPage + 7 < LAST_PAGE - 2
                                        ? currentPage + 7
                                        : LAST_PAGE - 2
                                }`}
                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                {currentPage + 7 < LAST_PAGE - 2
                                    ? currentPage + 7
                                    : LAST_PAGE - 2}
                            </a>
                        )}
                        {currentPage > LAST_PAGE - 1 ? null : (
                            <a
                                href={`?page=${
                                    currentPage + 8 < LAST_PAGE - 1
                                        ? currentPage + 8
                                        : LAST_PAGE - 1
                                }`}
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {currentPage + 8 < LAST_PAGE - 1
                                    ? currentPage + 8
                                    : LAST_PAGE - 1}
                            </a>
                        )}
                        <a
                            href={`?page=${
                                currentPage + 9 < LAST_PAGE
                                    ? currentPage + 9
                                    : LAST_PAGE
                            }`}
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            {currentPage + 9 < LAST_PAGE
                                ? currentPage + 9
                                : LAST_PAGE}
                        </a>
                        <a
                            href={
                                isGetNextPage()
                                    ? `?page=${currentPage + 1}`
                                    : `?page=${currentPage}`
                            }
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="size-5"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}
