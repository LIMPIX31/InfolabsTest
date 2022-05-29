import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { NodeView } from './components/NodeView/NodeView'
import { Node } from './Node'
import { Three } from './Three'
import { ThreeView } from './components/ThreeView'
import { useFakeQuery } from './hooks/useFakeQuery'

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const App: FC = () => {
  const three = useFakeQuery()
  const [selected, setSelected] = useState<Node>()

  useEffect(() => console.log(selected), [selected])

  return (
    <Root>
      <ThreeView three={Three.fromJson(JSON.parse(three))} selected={selected} onSelect={setSelected}/>
    </Root>
  )
}
