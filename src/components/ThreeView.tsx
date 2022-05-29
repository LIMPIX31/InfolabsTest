import styled from 'styled-components'
import { NodeView, NodeViewProps } from './NodeView/NodeView'
import { Three } from '../Three'
import { FC } from 'react'

export interface ThreeViewProps {
  three: Three,
  selected?: NodeViewProps['selected'],
  onSelect?: NodeViewProps['onSelect'],
}

const Nodes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ThreeView: FC<ThreeViewProps> = ({ three, selected, onSelect }) => {
  return (
    <Nodes>
      {three.nodes.map(v => <NodeView node={v} selected={selected} onSelect={onSelect} depth={0} />)}
    </Nodes>
  )
}
