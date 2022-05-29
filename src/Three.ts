import { Node } from './Node'

export class Three{
  constructor(readonly nodes: Node[]) {}

  toJson(): any {
    return this.nodes.map(v => v.toJson())
  }

  static fromJson(json: any): Three {
    return new Three(json.map((v: any) => Node.fromJson(v)))
  }
}
