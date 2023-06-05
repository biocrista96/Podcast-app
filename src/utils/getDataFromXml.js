const getDataFromXml = (xml) =>{
 //se crea el DOMparser
  const parser = new DOMParser();
//parseamos el string que contiene el xml
  const xmlDoc = parser.parseFromString(xml, 'text/xml');
//seleccionamos todos los elementos items. estos contienen los capitulos
  const allChildrens =  xmlDoc.querySelectorAll('item')
//creamos un arreglo vacio para agregarle los capitulos
  let parsedChildrens = []

  //recorremos todos los items para extraer de ellos
  //la informacion necesaria para crear el objeto capitulo
  allChildrens.forEach((children, index) =>{
    let image = children.querySelector('image');
    let title= children.querySelector('title');
    let description= children.querySelector('description');
    let creationDate=children.querySelector('pubDate');
    let episodeType=children.querySelector('episodeType');
    let author=children.querySelector('author');
    let subtitle= children.querySelector('subtitle');
    let sumary= children.querySelector('summary');
    let content=children.querySelector('encoded');
    let duration=children.querySelector('duration');
    let url=children.querySelector('enclosure');
    let type=children.querySelector('enclosure');
    
    let temporalItem ={
      id:index,
      title: title ? title.textContent:'',
      description:description ? description.textContent :'',
      creationDate:creationDate?creationDate.textContent:'',
      episodeType:episodeType ?episodeType.textContent:'',
      author:author ? author.textContent:'',
      image: image? image.getAttribute('href'):''  ,
      subtitle:subtitle? subtitle.textContent:'',
      sumary: sumary? sumary.textContent:'',
      content:content?content.textContent:'',
      duration:duration?duration.textContent:'',
      playLink:{
        url:url?url.getAttribute('url'):'',
        type:type?type.getAttribute('type'):''
      }
    }
    //se agrega cada uno al arreglo vacio
    parsedChildrens.push(temporalItem)
  })

  return parsedChildrens
}

export default getDataFromXml;