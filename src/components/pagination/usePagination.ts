export type Pagination = {
  offset: number
  page: number,
  count: number,
  total: number,
}

export function usePagination({ page, count, total }: Pagination) {

  const genPages = (page: number, totalPages: number) => {
    const current = Math.min(page, totalPages)
    const total = Math.max(1, totalPages)

    if (total <= 7) {
      return Array.from({ length: total }).map((_, i) => i + 1)
    }
    if (current < 3) {
      return [1, 2, 3, "...", total - 1, total]
    }
    if (current === 3) {
      return [1, 2, 3, 4, "...", total - 1, total]
    }
    if (current > total - 2) {
      return [1, 2, "...", total - 2, total - 1, total]
    }
    if (current === total - 2) {
      return [1, 2, "...", total - 3, total - 2, total - 1, total]
    }

    return [1, "...", current - 1, current, current + 1, "...", total]
  }

  const totalPages = Math.ceil(total / count)
  const pages = genPages(page, totalPages)
  const isCurrent = (n: number) => n === page

  return { pages, isCurrent }
}