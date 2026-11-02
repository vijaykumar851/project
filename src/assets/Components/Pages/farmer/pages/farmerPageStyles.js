const content =
  'mx-auto w-full max-w-[1600px] space-y-6 bg-[#f8faf8] p-4 text-slate-800 sm:p-6'

const welcome =
  'rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-lime-50 p-6 shadow-sm sm:p-8 [&>span]:mb-2 [&>span]:block [&>span]:text-xs [&>span]:font-semibold [&>span]:uppercase [&>span]:tracking-[0.12em] [&>span]:text-emerald-700 [&>h1]:mb-2 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:tracking-tight [&>h1]:text-slate-900 sm:[&>h1]:text-3xl [&>p]:max-w-3xl [&>p]:text-sm [&>p]:leading-6 [&>p]:text-slate-600'

const stats =
  'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 [&>article]:min-w-0 [&>article]:rounded-2xl [&>article]:border [&>article]:border-slate-200 [&>article]:bg-white [&>article]:p-5 [&>article]:shadow-sm [&>article]:transition [&>article]:duration-200 [&>article:hover]:-translate-y-0.5 [&>article:hover]:shadow-md [&>article>span]:mb-2 [&>article>span]:block [&>article>span]:text-xs [&>article>span]:font-medium [&>article>span]:text-slate-500 [&>article>strong]:block [&>article>strong]:break-words [&>article>strong]:text-xl [&>article>strong]:font-bold [&>article>strong]:leading-tight [&>article>strong]:text-slate-900 [&>article>small]:mt-2 [&>article>small]:block [&>article>small]:text-xs [&>article>small]:leading-5 [&>article>small]:text-slate-500'

const cardBase =
  'gap-4 [&>article]:flex [&>article]:min-w-0 [&>article]:flex-col [&>article]:items-start [&>article]:rounded-2xl [&>article]:border [&>article]:border-slate-200 [&>article]:bg-white [&>article]:p-5 [&>article]:shadow-sm [&>article]:transition [&>article]:duration-200 [&>article:hover]:-translate-y-0.5 [&>article:hover]:border-emerald-200 [&>article:hover]:shadow-md [&>article>.role-dashboard__card-icon]:mb-1 [&>article>.role-dashboard__card-icon]:flex [&>article>.role-dashboard__card-icon]:h-11 [&>article>.role-dashboard__card-icon]:w-11 [&>article>.role-dashboard__card-icon]:items-center [&>article>.role-dashboard__card-icon]:justify-center [&>article>.role-dashboard__card-icon]:rounded-xl [&>article>.role-dashboard__card-icon]:bg-emerald-50 [&>article>.role-dashboard__card-icon]:text-xl [&>article>h3]:text-base [&>article>h3]:font-semibold [&>article>h3]:leading-6 [&>article>h3]:text-slate-900 [&>article>p]:text-sm [&>article>p]:leading-6 [&>article>p]:text-slate-600 [&>article>button]:mt-auto [&>article>button]:rounded-lg [&>article>button]:bg-emerald-700 [&>article>button]:px-3.5 [&>article>button]:py-2 [&>article>button]:text-left [&>article>button]:text-xs [&>article>button]:font-semibold [&>article>button]:text-white [&>article>button]:transition [&>article>button:hover]:bg-emerald-800 [&>article>button:focus-visible]:outline [&>article>button:focus-visible]:outline-2 [&>article>button:focus-visible]:outline-offset-2 [&>article>button:focus-visible]:outline-emerald-700'

const cards3 = `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${cardBase}`
const cards2 = `grid grid-cols-1 md:grid-cols-2 ${cardBase}`
const cards1 = `grid grid-cols-1 ${cardBase}`

const sectionHeading =
  'flex flex-wrap items-center justify-between gap-3 [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-slate-900 [&>button]:rounded-lg [&>button]:border [&>button]:border-emerald-200 [&>button]:bg-white [&>button]:px-3.5 [&>button]:py-2 [&>button]:text-sm [&>button]:font-semibold [&>button]:text-emerald-800 [&>button]:transition [&>button:hover]:bg-emerald-50'

const cardLink =
  'inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-white px-3.5 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50'

export const farmerPageStyles = {
  content,
  welcome,
  stats,
  cards1,
  cards2,
  cards3,
  sectionHeading,
  cardLink,
}
