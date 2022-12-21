const _public = {};

_public.build = customData => {
  const data = buildTagData(customData);
  clearExistingMetaTags(data);
  appendMetaTags(data);
};

function buildTagData(customData){
  const { title, description, keywords } = { ...getDefaultMetaData(), ...purgeCustomData(customData) };
  return [
    { tagName: 'title', innerText: title },
    { tagName: 'meta', attrName: 'name', attrValue: 'description', content: description },
    { tagName: 'meta', attrName: 'name', attrValue: 'twitter:title', content: title },
    { tagName: 'meta', attrName: 'name', attrValue: 'twitter:description', content: description },
    { tagName: 'meta', attrName: 'property', attrValue: 'og:title', content: title },
    { tagName: 'meta', attrName: 'property', attrValue: 'og:description', content: description },
    { tagName: 'meta', attrName: 'name', attrValue: 'keywords', content: keywords }
  ];
}

function purgeCustomData(customData) {
  return Object.entries(customData).reduce((result, [key, value]) => value ? { ...result, [key]: value } : result, {});
}

function clearExistingMetaTags(data){
  data.forEach(({ tagName, attrName, attrValue }) => {
    return tagName == 'title' ? removeTags(tagName) : removeTags(`[${attrName}="${attrValue}"]`);
  });
}

function appendMetaTags(data){
  data.forEach(tagData => {
    const tag = tagData.tagName == 'title' ? buildTitle(tagData) : buildMetaTag(tagData);
    document.head.appendChild(tag);
  });
}

function removeTags(selector){
  Array.from(document.querySelectorAll(selector)).forEach(tag => tag && tag.remove());
}

function buildTitle({ innerText }){
  const tag = document.createElement('title');
  tag.innerHTML = innerText;
  return tag;
}

function buildMetaTag({ attrName, attrValue, content }){
  const tag = document.createElement('meta');
  tag.setAttribute(attrName, attrValue);
  tag.setAttribute('content', content);
  return tag;
}

function getDefaultMetaData(){
  return {
    title: 'Four-Day Week',
    description: 'This website gets together all the companies that already work four days a week or that sympathize with shorter work weeks.',
    keywords: 'four-day week, rafael camargo, comapanies'
  };
}

export default _public;
