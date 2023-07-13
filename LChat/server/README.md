```md
npm install express
npm i -D typescript @types/express @types/node ts-node nodemon # ts-node 있으면 tsc를 통해서 컴파일 안하고 바로 실행 가능

npx tsc --init

https로 하고싶은데 https 서버 만들어도 SSL Certificate가 없음
- openssl genrsa -out key.pem // 개인키
- openssl req -new -key key.pem -out csr.pem // 실제 인증서 만들때 필요한 인풋 정보들 제공. certificate service request
- openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem // 공개키/인증서
```