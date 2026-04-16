const Greeting = (props:{name: string}) => {
  return (
    <div>
      こんにちは、{props.name}さん！
    </div>
  )
}

export default Greeting;