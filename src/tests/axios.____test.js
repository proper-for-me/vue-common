import { expect, test, describe } from 'vitest'
import axiosInstance from '@/util/ApiUtil';
const FormData = require('form-data');

describe('axios 통신 테스트', () => {
    test('axios test 1.get 요청 ', async () => {
        const result = await axiosInstance
            .get('/posts')
            .then(function (response) {
                // 응답결과  
                console.log('***************** 응답결과 ********** ******* ')
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            })
            .catch(function (error) {
                if (error.response) {
                    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // 요청이 전송되었지만, 응답이 수신되지 않았습니다. 
                    // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
                    // node.js에서는 http.ClientRequest 인스턴스입니다.
                    console.log(error.request);
                } else {
                    // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });



    });

    // test('axios test 2.get 요청 With parameter ', async () => {
    //     const params = { "id": 0 }
    //     const result = await axiosInstance.get('/posts',
    //         { params }
    //     );
    //     console.log(result.data);
    // });


    // test('axios test 3.post With parameter', async () => {
    //     const posts = await axiosInstance.get('/posts')
    //     const lastPostId = Number(posts.data[posts.data.length - 1].id) + 1;

    //     const data = {
    //         "id": lastPostId,
    //         "title": `지금 내아이디는 ::: ${lastPostId}`,
    //         "author": "angun"
    //     }
    //     console.log('lastPostId    ' + lastPostId);
    //     const result = await axiosInstance.post('/posts', data)
    //     console.log(result.data);

    // });
});

// test('axios test 4.post 요청 With parameter ', async () => {
//     const params = { "id": 0 }

//     const result = await axiosInstance.post('/posts',
//         { params }
//     );

//     console.log(result.data);

// });


// describe('increment', () => {
//     test('axios 테스트 통신 ', () => {

//         //expect(increment(0, 10))
//     })

//     // test('현재 숫자를 최대값 이상으로 증가시키지 않습니다.', () => {
//     //     expect(increment(10, 10)).toBe(10)
//     // })

//     // test('기본 최대값은 10입니다.', () => {
//     //     expect(increment(10)).toBe(10)
//     // })
// });


