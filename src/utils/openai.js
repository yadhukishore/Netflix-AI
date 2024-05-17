// import OpenAI from 'openai';
// import { OPENAI_KEY } from './constants';

// const openai = new OpenAI({
//   apiKey: OPENAI_KEY, 
//   dangerouslyAllowBrowser:true//openai doest allow call from the browser now we can make that(try to do these from the backend)
// });
// export default openai;
import Gemini from 'gemini-ai';

// Replace this with your actual Gemini API key
import { GEMINI_API_KEY } from './constants';

const gemini = new Gemini(GEMINI_API_KEY);

export default gemini;