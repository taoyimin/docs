export type TypeListHolder = { typeList: [{ label: string }] }

const getTypeStr = (p: TypeListHolder) => {
  return p.typeList.map(it => it.label).join(",")
}

export const dealTypeData = (res: TypeListHolder[] | TypeListHolder) => {
  if (res instanceof Array) {
    return (res as TypeListHolder[]).map(item => dealTypeData(item))
  } else {
    return Object.assign({"typeStr": getTypeStr(res)}, res)
  }
}

