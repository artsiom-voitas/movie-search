import IconProps from '.'

export default function Imdb({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-label='IMDb'
      viewBox='0 0 512 512'
      className={`${className ? className : ''} w-[25px]`}
    >
      <rect width={512} height={512} fill='#f5c518' rx='15%' />
      <path d='M104 328V184H64v144zm85-144-9 67-5-36-5-31h-50v144h34v-95l14 95h25l13-97v97h34V184zm67 144V184h62c15 0 26 11 26 25v94c0 14-11 25-26 25zm47-118-9-1v94c5 0 9-1 10-3 2-2 2-8 2-18v-68l-3-4zm116 10h3c14 0 26 11 26 25v58c0 14-12 25-26 25h-3c-8 0-16-4-21-11l-2 9h-36V184h38v46c5-6 13-10 21-10zm-8 70v-34l-1-11c-1-2-4-3-6-3s-5 1-6 3v57c1 2 4 3 6 3s6-1 6-3l1-12z' />
    </svg>
  )
}