## 1. 댓글을 담을 state 만들기

```javascript
const [commentArray, setCommentArray] = useState([
  {
    id: 0,
    content: "싸우지 마ㅠ",
  },
]);
```

- 댓글이 여러개 담겨야하기 때문에 배열 안에 담아야 한다.
- 댓글에는 다양한 정보 (사용자 id, 댓글 내용, 사진 등)가 들어가야하기 때문에 객체 타입으로 담는다.
- id: 1, content:"싸우지 마ㅠ"라는 초기값을 지정해준다.

---

## 2. map 함수를 통해서 ui를 그려주기

ui 태그 여기서는 li 태그를 개 수 만큼 리턴해줘야하기 때문에 map함수를 사용해야한다. (map함수와 foreach의 차이점?)

```javascript
<div className="feed-comment-list">
  {commentArray.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  })}
</div>
```

- map 함수는 배열의 요소를 모두 다 반환해주는 특징이 있다.
- `(comment)`는 map 함수의 필수 요소로 commentArray의 요소들을 지칭한다.
- `<li>`에 key값을 부여하지 않으면 오류가 난다. map 함수는 하나씩 반환하기 때문에 식별할 수 있는 key 값이 필요하기 때문이다. 보통 id값을 key값으로 사용한다 (왜 인덱스는 안쓰는지?)

---

## 3. feed-comment-list에 동적으로 댓글 추가하기

버튼을 눌렀을 때 input에 있는 값이 feed-comment-list에 state로 추가되는 함수가 실행되어야한다.

이는 두가지 방식으로 구현할 수 있는데
**1) input 에 onChange 이벤트를 사용하는 방법과 **
** 2) useRef라는 Hook을 사용하는 방법이 있다.**

---

## 3-1. input 에 onChange 이벤트를 사용하는 방법

### 1) comment를 담는 state 선언하기

```javascript
const [comment, setComment] = useState();
```

### 2) input에 setComment로 변경되는 값 반영하기

```javascript
<input className="comments-input" type="text" placeholder="댓글 달기..."
onChange={(e) => {onChange={(e) => {setComment(e.target.value);}} />
```

### 3) comment를 commentArray에 넣는 함수 작성하기

```javascript
const [id, setId] = useState(1);

const [commentArray, setCommentArray] = useState([
  {
    id: 0,
    content: "싸우지 마ㅠ",
  },
]);

const addComment = () => {
  setId(id + 1);
  const newComment = {
    id: id,
    content: comment,
  };
  setCommentArray([...commentArray, newComment]);
};
```

- setCommentArray에 `.push`를 하지 않는 이유는 자바스크립트에서만 사용하는 문법이라 리액트가 못알아들어서 렌더링이 안되기 때문이다.
- 따라서 spread 함수를 사용해야한다.(spread함수란?)
- newComment라는 새로운 객체를 만들어서 commentArray에 추가
- id 값도 새로운 댓글이 작성 될 때마다 새로운 id가 부여되야하므로 state에 id값을 넣어줘야 한다.
- setCommentArray에 spread함수로 기존에 있던 값들(commentArray)를 펼쳐주고, 그 뒤에 newComment를 넣어준다.

### 4) addComment함수를 버튼에 적용하기

```javascript
<button className="upload-button" onClick={addComment}>
  게시
<button/>
```

- onClick으로 버튼 클릭 이벤트를 감지하면 함수가 실행될 수 있도록 해준다.
- {} 안에 addComment 함수를 넣어 준다.

---

## 3-2. useRef 사용하는 방법

### 1) 참조를 걸 변수 만들기

```javascript
const value = useRef();
```

- value라는 변수에 useRef를 호출해준다.
- value를 참조하고 싶은 태그에 걸어준다.

### 2) 참조하고 싶은 태그에 걸기

```javascript
<input
  className="comments-input"
  type="text"
  placeholder="댓글 달기..."
  ref={value}
/>
```

- ref로 value 걸기

### 3) 참조한 태그의 value를 commentArray에 추가하기

```javascript
const addComment = () => {
  setId(id + 1);
  const newComment = {
    id: id,
    content: value.current.value,
  };
  setCommentArray([...commentArray, newComment]);
};
```

- content에 value.current.value를 담아준다.
- 첫번 째 value는 위에서 선언한 value변수 즉 useRef를 호출한 값을 의미하고
- 두번 째 value는 input태그의 value를 의미한다.
