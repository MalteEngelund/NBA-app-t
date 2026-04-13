interface H2TitleProps {
  title: string;
}

export function H2Title({ title }: H2TitleProps) {

  return( 
    <h2 className="text-3xl text-blue-600 font-semibold text-center py-4">
      {title}
    </h2>
  )
  
}