import Prism from "prismjs";
import "prismjs/themes/prism.css";
import Accordion from 'react-bootstrap/Accordion';

const ProjectCode = () => {
  return ( 
    <>
      <h1>Project Code</h1>
      <div>
      <h2>How to create the authSlice:</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pseudocode</Accordion.Header>
          <Accordion.Body>
          <ol>
            <li>
              Import the <strong>'createSlice'</strong> function from the Redux Toolkit library.
            </li>
            <li>
              Define an initial state object, which is an object with a single property <strong>'userInfo'</strong>. The value of userInfo is retrieved from the browser's <strong>'localStorage'</strong>. If there is a value for 'userInfo' in localStorage, it is parsed from JSON; otherwise, it is set to <strong>'null'</strong>.
            </li>
            <li>
              Create a Redux Slice named 'auth' using the <strong>'createSlice'</strong> function. This slice includes the initial state and a set of reducer functions.
            </li>
            <li>Inside the 'authSlice', define two reducer functions:</li>
            <ul>
              <li>
                <strong>'setCredentials'</strong>: This function takes the current <strong>'state'</strong> and an <strong>'action'</strong> as parameters. It updates the <strong>'state.userInfo'</strong>  with the <strong>'action.payload'</strong> (which is expected to be an object) and also stores this object as a JSON string in the browser's <strong>'localStorage'</strong> under the key 'userInfo'.
                </li>
              <li>
                <strong>'logout'</strong>: This function takes the current <strong>'state'</strong> and an <strong>'action'</strong>  as parameters. It sets <strong>'state.userInfo'</strong> to <strong>'null'</strong> and removes the 'userInfo' key from the <strong>'localStorage'</strong>.
              </li>
            </ul>
            <li>
              Export the <strong>'setCredentials'</strong> and <strong>'logout'</strong> action creators. These can be used to dispatch actions to the Redux store to update the user's credentials and log them out.
            </li>
            <li>
              Export the <strong>'authSlice.reducer'</strong>, which is a reducer function created by <strong>'createSlice'</strong>. This reducer function handles state updates based on the actions dispatched using the <strong>'setCredentials'</strong> and <strong>'logout'</strong> actions. It will update the <strong>'userInfo'</strong> property in the Redux store state based on the actions.
            </li>
          </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Code</Accordion.Header>
          <Accordion.Body>
            <pre><code className="language-jsx">
              {
              `import { createSlice } from '@reduxjs/toolkit';

                const initialState = {
                  userInfo: localStorage.getItem('userInfo') 
                    ? JSON.parse(localStorage.getItem('userInfo'))
                    : null,
                };
                
                const authSlice = createSlice({
                  name: 'auth',
                  initialState,
                  reducers: {
                    setCredentials: (state, action) => {
                      state.userInfo = action.payload;
                      localStorage.setItem('userInfo', JSON.stringify(action.payload))
                    },
                    logout: (state, action) => {
                      state.userInfo = null;
                      localStorage.removeItem('userInfo');
                    },
                  },
                });
                
                export const { setCredentials, logout } = authSlice.actions;
                
                export default authSlice.reducer;`
              }
            </code></pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      
      <Accordion defaultActiveKey="0">
      <h2>The correct proxy settings for vite.config.js</h2>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Code</Accordion.Header>
        <Accordion.Body>
        <pre><code className="language-jsx">
          {
            `import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'
            
            // https://vitejs.dev/config/
            export default defineConfig({
              plugins: [react()],
              server: {
                '/api': {
                  port: 3000,
                  proxy: {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: process.env.NODE_ENV === 'production',
                    ws: true,
                  }
                }
              }
            })`
          }
        </code></pre>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </>
   );
}
 
export default ProjectCode;