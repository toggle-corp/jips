export const validateHeaderFooterAndBackground = (data:string[]) =>{
  if (data.length < 2) return false;
  const header = data.filter((x:string)=> x!== undefined && x!== null && x!== "");
  if (header.length < 2 || header.length > 2) return false;
  return true;
}

export const validateHeadings = (data:string[]) => {
  if (data.length < 4) return false;
  const section = data.filter((x:string)=> x!== undefined && x!== null && x!== "");
  if (section.length < 3) return false;
  return true;
}

export const validateSections = (data:any[], colCount:number) =>{
  data.forEach((row:string[])=> {
    if (row.length < 4) return false;
    const section = row.filter((x:string)=> x!== undefined && x!== null && x!== "");
    if (section.length < 3 || section.length > colCount) return false;
  });
  return true;
}

export const ValidateGenderKeys = (data:any[], colCount:number)  =>{
  const genderData = data.slice(24, 30);
  genderData.forEach((row:any[])=> {
    if (row.length < colCount ) return false;
    if (typeof row[1]  !== "string") return false;
    if (row[1].split("-").length < 2) return false;
  });
  return true;
}

export const validate = (data:any[]) =>{
  if (data.length < 58) return false;
  const validHead = validateHeaderFooterAndBackground (data[0]) &&
                    validateHeaderFooterAndBackground (data[1]) &&
                    validateHeaderFooterAndBackground (data[2]);
  const validHeadings = validateHeadings (data[3]);
  const legends = data[3].filter((x:string)=> x!== undefined && x!== null && x!== "");
  const sections = data.slice(4).filter((x:any[]) => x.length> 0)
  const validSections = validateSections (sections, legends.length);
  const validGenderKeys = ValidateGenderKeys (data, legends.length);
  return validHead && validHeadings && validSections && validGenderKeys;
}
