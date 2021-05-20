import axios from 'axios';

const url = 'https://www.16personalities.com/br/descricoes-dos-tipos';

const REGEX  = /\w+\:.*\.svg/igm;

const  requirePage = async (set) => {
    try {
       const res = await axios(url);
       const html = await res.data;
  
       const linksRegexFilter = html.match(REGEX);
  
       const linksNoRepeat = [...new Set(linksRegexFilter)];
  
       const personalitysLinks = linksNoRepeat.filter(item => !item.includes('logo'));
  
       set(personalitysLinks);
  
    } catch(error) {
       console.log(error);	
    }
}

export default requirePage;