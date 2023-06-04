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
    let image = children.querySelector('image')
    let temporalItem ={
      id:index,
      title: children.querySelector('title').textContent,
      description: children.querySelector('description').textContent,
      creationDate:children.querySelector('pubDate').textContent,
      episodeType:children.querySelector('episodeType').textContent,
      author:children.querySelector('author').textContent,
      image: image? image.getAttribute('href'):''  ,
      subtitle: children.querySelector('subtitle').textContent,
      sumary: children.querySelector('summary').textContent,
      content:children.querySelector('encoded').textContent,
      duration:children.querySelector('duration').textContent,
      playLink:{
        url:children.querySelector('enclosure').getAttribute('url'),
        type:children.querySelector('enclosure').getAttribute('type')
      }
    }
    //se agrega cada uno al arreglo vacio
    parsedChildrens.push(temporalItem)
  })

  return parsedChildrens
}

export default getDataFromXml;