interface WelcomeProps {
    title: string
}
export default function Welcome(props: WelcomeProps) : any {
  
    return (
        <div>{props.title}</div>
    )
}
