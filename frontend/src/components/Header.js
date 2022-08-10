import {Link} from 'react-router-dom';
import './header.css';

function Header() {

    return(
        <>
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 105">
                <path id="H" d="M80.85-.85A1.131,1.131,0,0,0,79.65.5V38.7a1.193,1.193,0,0,1-1.35,1.35h-30a1.193,1.193,0,0,1-1.35-1.35V0.5a1.132,1.132,0,0,0-1.2-1.35H21.6A1.193,1.193,0,0,0,20.25.5l-20,51.75,20,51.7a1.131,1.131,0,0,0,1.35,1.2H45.75a1.06,1.06,0,0,0,1.2-1.2V65.4a1.193,1.193,0,0,1,1.35-1.35h30a1.193,1.193,0,0,1,1.35,1.35v38.55a1.059,1.059,0,0,0,1.2,1.2H105a1.131,1.131,0,0,0,1.35-1.2V0.5A1.193,1.193,0,0,0,105-.85H80.85Z"/>
                <path id="R" d="M141.3,67.05A30.949,30.949,0,0,0,146.85,63a29.912,29.912,0,0,0,7.8-11.85,42.8,42.8,0,0,0,3-15.75,40.263,40.263,0,0,0-1.425-10.725A36.236,36.236,0,0,0,152.1,15.15a32.264,32.264,0,0,0-6.6-7.65,29.946,29.946,0,0,0-11.55-5.775Q127.048-.149,114-0.15H81.45a1.06,1.06,0,0,0-1.2,1.2V103.5a1.131,1.131,0,0,0,1.2,1.35h24.3a1.132,1.132,0,0,0,1.2-1.35v-30a1.193,1.193,0,0,1,1.35-1.35h4.2a1.359,1.359,0,0,1,1.2.75l13.65,31.5a1.164,1.164,0,0,0,1.2.75H154.8a1.24,1.24,0,0,0,1.125-.6,1.163,1.163,0,0,0,.075-1.2L140.85,68.7a1.207,1.207,0,0,1,.45-1.65h0ZM116.1,48h-7.8a1.193,1.193,0,0,1-1.35-1.35V25.2A1.132,1.132,0,0,1,108.3,24h6.9q7.049,0,10.65,1.5Q132,28.2,132,35.85q0,7.952-6,10.65-3.3,1.5-9.9,1.5h0Z"/>
                <path id="N" d="M204.03,20.3a0.855,0.855,0,0,0-.968.968L203.425,63.5a0.931,0.931,0,0,1-.726,1.028,1.1,1.1,0,0,1-1.21-.423l-28.8-43.318a1.052,1.052,0,0,0-.847-0.484H154.783a0.855,0.855,0,0,0-.968.968v82.764a0.854,0.854,0,0,0,.968.968h18.634a0.963,0.963,0,0,0,1.089-1.089l-0.363-38.962a0.926,0.926,0,0,1,.666-1.029,1.037,1.037,0,0,1,1.149.423l28.677,40.172a1.045,1.045,0,0,0,.847.484h17.182a0.912,0.912,0,0,0,1.089-.968V21.268a0.913,0.913,0,0,0-1.089-.968H204.03Z"/>
                <path id="e" d="M278.233,30.586L277,29.818a3.109,3.109,0,0,1-.9-0.464l-0.641-.285c-0.426-.189-0.79-0.362-1.089-0.517l-0.191-.053a4.37,4.37,0,0,0-1.28-.57l-0.38-.106c-0.426-.189-0.791-0.362-1.09-0.517l-0.311.019L270.9,27.8l0.153-.594q-0.952-.263-1.9-0.531l-0.38-.106a8.78,8.78,0,0,1-1.211-.444l-0.12.073a15.316,15.316,0,0,0-1.642-.352l-0.38-.106q-1.071-.192-1.953-0.333a1.454,1.454,0,0,1-.5-0.034l-0.191-.053a22.683,22.683,0,0,0-2.314-.115l-0.069-.126q-1.432.026-2.866,0.049a1.64,1.64,0,0,0-.5-0.034l-0.083.72-0.038-.648-0.19-.053q-0.621.041-.932,0.058l-0.311.02-2.1.262-0.19-.053a4.652,4.652,0,0,1-1.294.276,1.072,1.072,0,0,0-.431.092q-0.862.185-1.6,0.3a10.179,10.179,0,0,0-1.776.566l-0.432.092q-1.655.494-3.241,1.113l-0.362.218q-1.706.693-3.343,1.509l-0.361.218-1.567.943-1.568.943-0.361.218a7.18,7.18,0,0,0-1.136.851l-0.121.073-0.12.073-0.241.145q-0.775.635-1.308,1.122l-0.12.072q-0.775.635-1.428,1.194l-0.292.343q-0.536.49-.946,0.9L231,36.726c-0.162.1-.217,0.188-0.171,0.271a7.507,7.507,0,0,0-1.238,1.247,17.536,17.536,0,0,1-1.168,1.373,1.111,1.111,0,0,0-.292.343,9.978,9.978,0,0,1-.876,1.03l-0.051.2-0.172.271a13.547,13.547,0,0,0-1.1,1.5c-0.229.363-.515,0.812-0.858,1.354a1.689,1.689,0,0,1-.222.469l-0.121.073a7.791,7.791,0,0,0-.616,1.208l-0.292.343a13.564,13.564,0,0,1-.719,1.6,41.459,41.459,0,0,0-4.02,16.825c-0.008.565,0,1.17,0.043,1.817l-0.084.72a0.61,0.61,0,0,0,.089.449,0.435,0.435,0,0,0,.018.324l-0.1.4a0.614,0.614,0,0,1,.089.45c0.037,0.648.091,1.23,0.162,1.745q0.215,1.548.5,3.219A41.346,41.346,0,0,0,223.2,84.14l0.974,1.759,0.974,1.759A32.63,32.63,0,0,0,228.79,92.5a10.345,10.345,0,0,0,1.266,1.416q0.8,0.862,1.856,1.9a35.968,35.968,0,0,0,4.054,3.256,1.5,1.5,0,0,0,.45.232l0.07,0.126a12,12,0,0,0,1.229.768l0.19,0.053a5.293,5.293,0,0,0,1.229.768,37.25,37.25,0,0,0,15.991,4.784,12.459,12.459,0,0,1,1.693.155l0.5,0.033c0.414-.024.828-0.051,1.243-0.078l0.12-.072a0.391,0.391,0,0,1,.38.106q1.051-.129,1.674-0.17a12.1,12.1,0,0,0,1.8-.242,0.383,0.383,0,0,0,.311-0.019l0.19,0.053a9.991,9.991,0,0,1,1.294-.276,0.542,0.542,0,0,0,.431-0.092,8.47,8.47,0,0,0,1.725-.368,7.171,7.171,0,0,0,1.655-.493,0.391,0.391,0,0,0,.311-0.02l0.121-.072c0.446-.159.855-0.293,1.224-0.4l0.552-.165,1.344-.474,0.362-.217q0.671-.238,1.586-0.619L274,102.15l0.121-.072a7.071,7.071,0,0,0,1.275-.6l0.121-.073,0.241-.145a12.785,12.785,0,0,0,1.636-.817,13.032,13.032,0,0,0,1.5-1.069l0.482-.29q1.377-1,2.875-2.065l0.292-.343q1.307-1.124,2.545-2.369l0.292-.343a10.614,10.614,0,0,0,1.358-1.32q0.462-.615,1.048-1.3L288.074,91a9.724,9.724,0,0,0,.876-1.03l0.051-.2q0.633-.883,1.391-1.842l0.051-.2a3.217,3.217,0,0,1,.635-0.885l0.051-.2a1.714,1.714,0,0,1,.222-0.469l0.172-.271q0.685-1.08,1.3-2.291l0.051-.2q0.5-1.134,1.061-2.146l0.153-.594q0.326-.863.7-1.929l-0.571-.159,0.691,0.087,0.033-.522a11.334,11.334,0,0,0,.477-1.46l0.12-.073a9.868,9.868,0,0,0,.237-1.315l0.1-.4q0.253-.989.509-1.982l0.1-.4a9.932,9.932,0,0,1,.236-1.315l-0.019-.324a2.328,2.328,0,0,1,.084-0.72l0.1-.4a10.975,10.975,0,0,0,.11-2.412q0.063-1.043.2-1.962l-0.037-.648a27.752,27.752,0,0,0-.238-3.04,1.105,1.105,0,0,0-.522-0.942,1.244,1.244,0,0,0-1.036-.13L276.441,67.68a1.04,1.04,0,0,0-.686,1.083,17.762,17.762,0,0,1-8.645,13.41,16.244,16.244,0,0,1-8.657,2.361,18.155,18.155,0,0,1-8.867-2.37,1.268,1.268,0,0,1-.532-1.1,1.18,1.18,0,0,1,.591-1.109L294.369,53.04a1.075,1.075,0,0,0,.477-1.46,38.495,38.495,0,0,0-2.807-6.519,37.12,37.12,0,0,0-6.876-8.929,43.8,43.8,0,0,0-6.93-5.546h0Zm-35.7,34.21a1.022,1.022,0,0,1-1.027.032,1.01,1.01,0,0,1-.633-0.708,9.6,9.6,0,0,1-.216-5.9,16.274,16.274,0,0,1,3.082-6.042,19.9,19.9,0,0,1,5.4-4.757,17.763,17.763,0,0,1,10.192-2.782,10.091,10.091,0,0,1,7.82,3.67,1.127,1.127,0,0,1,.306.988,1.172,1.172,0,0,1-.575.848Z"/>
                <path id="t" d="M325.85,84.3a7.747,7.747,0,0,1-5.4-1.65q-1.8-2.1-1.65-7.8V29a1.06,1.06,0,0,1,1.2-1.2h8.25a1.193,1.193,0,0,0,1.35-1.35V7.7a1.193,1.193,0,0,0-1.35-1.35H320a1.059,1.059,0,0,1-1.2-1.2V0.4a1.132,1.132,0,0,0-1.2-1.35H295.25A1.131,1.131,0,0,0,294.05.4V5.15a1.131,1.131,0,0,1-1.35,1.2H144.45a1.131,1.131,0,0,0-1.2,1.35V26.45a1.131,1.131,0,0,0,1.2,1.35H292.7a1.132,1.132,0,0,1,1.35,1.2V86.25q0,9.3,5.25,14.4t15.45,5.55h0.3q2.549,0,12.3-.6a1.1,1.1,0,0,0,1.2-1.05L331.4,85.8a1.6,1.6,0,0,0-.375-1.05,1.213,1.213,0,0,0-.975-0.45h-4.2Z"/>
            </svg>

            <nav>
                <ul>
                    <li><Link to="/employees">View current employees</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;
