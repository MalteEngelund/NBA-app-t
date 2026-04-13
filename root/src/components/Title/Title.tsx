
interface TitleProps {
  title: string;
}

export function Title( { title }: TitleProps) {

  return(
    <h1 className="text-center text-4xl py-8 text-blue-600 font-semibold">{title}</h1>
  )
}