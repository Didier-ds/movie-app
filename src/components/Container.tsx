interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = (props: ContainerProps) => {
    return (
        <div className={"container "+ props.className}>
            {props.children}
        </div>
    )
}

export default Container