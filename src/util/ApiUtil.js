import Axios from 'axios';

const defaultHeaders =  Axios.defaults.headers;
// console.log(`Axios 기본 헤더값 체크 :  ${JSON.stringify(defaultHeaders)}`);

const otherHeaders = {
    'Content-Type': 'application/json;charset=utf-8',
}

// const authorHeaders = {
//     'Authorization': 'Bearer ' + "1111111111111222"  // 헤더 설정 (옵션)
// } 

// console.log(process.env.VUE_APP_EXER + " zzzzzzzzz " + import.meta.env.MODE + process.env.VUE_APP_API);
const AUTH_TOKEN = "auth_TOKEN ";
const axiosInstance = Axios.create({//...defautlConfig,
    //  ...{
    baseURL: 'http://localhost:3001/' ,
    timeout: 5000,
    headers: {...defaultHeaders, ...otherHeaders},
    headers: { 'Content-Type': 'application/json;charset=utf-8'},
// }
});


// Axios Instance 업데이트 함수 추가
function updateAxiosInstance(token) {
    axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + token;
}

axiosInstance.interceptors.request.use(
    config => {
        //     console.dir(`인터셉터 [Request config_호출 성공]:  ${config}`)
        // config.headers = {...config.headers, ...authorHeaders}
        // console.log(`Axios interceptors request 제어 체크 :` + JSON.stringify(config.headers));

        // if (config.data instanceof FormData) {
        //     Object.assign(config.headers, config.data.getHeaders());
        //   }
          
        return config;
    },
    err => {
        //   console.dirxml(`인터셉터 [Request config_호출 실패]:  ${config}`)
        
        return Promise.reject(err);
    },
);
axiosInstance.interceptors.response.use(
    config => {
        console.log(config);
        //      console.dirxml(`인터셉터 [Response config_호출 성공]:  ${config}`)
        return config;
    },
    ({ config, request, response, ...err }) => { 
        /** response응답 후에 status-code가 4xx, 5xx 처럼 에러를 나타내는 경우 해당 루트를 수행한다.
        *  서버단 응답 메세제지 객체로 변경하여 넣어 줄것   ${response.statusText}
        */ 
        const errMsg = 'Error Message' ;
        // console.log(errMsg);
        return Promise.reject({
            config,
            message: errMsg,
            response,
            ...err,
        });
    },
);

export default axiosInstance;

// response 스키마 
// {
//     // `data`는 서버가 제공하는 응답입니다.
//     data: {},
  
//     // `status`는 HTTP 상태 코드입니다.
//     status: 200,
  
//     // `statusText`는 HTTP 상태 메시지입니다.
//     statusText: 'OK',
  
//     // `headers`는 HTTP 헤더입니다.
//     // 모든 헤더 이름은 소문자이며, 괄호 표기법을 사용하여 접근할 수 있습니다.
//     // 예시: `response.headers['content-type']`
//     headers: {},
  
//     // `config`는 요청을 위해 `Axios`가 제공하는 구성입니다.
//     config: {},
  
//     // `request`는 이번 응답으로 생성된 요청입니다.
//     // 이것은 node.js에서 마지막 ClientRequest 인스턴스 입니다.
//     // 브라우저에서는 XMLHttpRequest입니다.
//     request: {}
//   }