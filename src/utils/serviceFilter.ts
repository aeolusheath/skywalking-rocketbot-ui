export const getPrefixes = (projects: any[]) => {
  const prefixes:any = []
  projects.forEach(item => {
    prefixes.push(`${item}#`);
  });
  return prefixes
}

export const  getFilterProjectList = (prefixes: string[], serviceList: any[], key = "label") => {
  const list = serviceList || []
  if (prefixes.length ===0) {
    return serviceList
  }
  const result = list.filter(item => {
     return prefixes.some(prefix => item[key].indexOf(prefix) === 0)
  })
  return result
}
