### 기능
- 채팅방 목록 노출
    - 클릭시 들어감
- 채팅방 생성
    - 채팅방 이름 입력
    - 채팅방 생성 버튼 클릭
- 채팅방 모양은 메신저 참조.    
- 여러명이 하나의 채팅방에 참여
    - sender를 제외하고 notify
    - 'room' 을 통해서 한번에 해당 room에 있는 사람에게 보낼 수 있었음 (sender 포함)

### 7.24 TODO
- FE
    - 내가 보낸건 왼쪽 말풍선, 받은건 오른쪽 말풍선
- BE
    - 어떻게 요청한 유저를 구분할 수 있을까? FE에서 connect에 따로 담는게 없는데?
        - socket.id는 매번 유니크함. 여기서 특정 유저를 어떻게 구분 지을지?


### TODO.
- https://socket.io/get-started/chat#homework