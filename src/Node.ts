export class Node {
  readonly subnodes: Node[] = []
  private _parent?: Node

  constructor(name: string)
  constructor(name: string, parent: Node)
  constructor(name: string, subnodes: Node[])
  constructor(name: string, subnodes: Node[], parent: Node)
  constructor(public readonly name: string, subnodes?: Node[] | Node, parent?: Node) {
    if (subnodes) {
      if (Array.isArray(subnodes)) {
        this.subnodes = subnodes
        this._parent = parent
      } else {
        this._parent = subnodes
      }
    }
    this.subnodes = this.subnodes.map(v => {
      v._parent = this
      return v
    })
  }

  get parent(): Node | undefined {
    return this._parent
  }

  get hasParent(): boolean {
    return !!this._parent
  }

  get fullPath(): string {
    const sequence: string[] = []
    let currentNode: Node | undefined = this
    do {
      sequence.push(currentNode.name)
      currentNode = currentNode!.parent
    } while (currentNode)
    return sequence.reverse().join('.')
  }

  get hasSubnodes(): boolean {
    return this.subnodes.length > 0
  }

  hasNodeRecursive(node: Node): boolean {
    for (const subnode of this.subnodes) {
      if (node.equals(subnode)) return true
      else if (subnode.hasNodeRecursive(node)) return true
    }
    return false
  }

  equals(node: Node): boolean {
    return this.fullPath === node.fullPath
  }

  toJson(): any {
    return {
      name: this.name,
      subnodes: this.subnodes.map(v => v.toJson())
    }
  }

  static fromJson(json: any): Node {
    return new Node(json.name, json.subnodes.map((v: any) => Node.fromJson(v)))
  }
}
