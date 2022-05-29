import { FC, useState } from 'react'
import { Node } from '../../Node'
import s from './NodeView.module.scss'
import arrow from '../../assets/arrow.png'
import cn from 'classnames'

export interface NodeViewProps {
  node: Node
  selected?: Node
  onSelect?: (node: Node) => void
  depth?: number
}

export const NodeView: FC<NodeViewProps> = ({ node, selected, onSelect, depth = 0 }) => {
  const [unfolded, setUnfolded]  = useState(false)
  return (
    <div
      className={cn(s.node, unfolded && s.unfolded)}>
      <div className={cn(s.parent, selected && node.equals(selected) && s.activeParent, selected && node.hasNodeRecursive(selected) && s.lowActive)} style={{ paddingLeft: `${depth * 10 + 15}px` }} onClick={() => {
        if(node.hasSubnodes) setUnfolded(!unfolded)
        else onSelect?.(node)
      }}>
        <img src={arrow} alt='arrow' className={cn(s.arrow, node.hasSubnodes && s.hiddenArrow)} />
        <div className={s.name}>{node.name}</div>
      </div>
      <div className={s.subnodes}>
        {node.subnodes.map(subnode => <NodeView node={subnode} selected={selected} onSelect={onSelect} depth={depth + 1}/>)}
      </div>
    </div>
  )
}
