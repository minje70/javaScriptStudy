# javascript 공부

## [코딩앙마 유튜브](https://www.youtube.com/watch?v=KF6t61yuPCY)

### 변수

- console.log()를 통해서 console에 출력한다.
- alert()를 통해 경고창을 띄운다.
- prompt()를 통해서 입력받고 입력받은 걸 리턴하는듯. 첫번째 인자는 출력 메세지, 두번째 인자는 default 값.
- confirm()을 통해 확인을 받을 수 있다. 여기서 확인을 누르면 true를 반환한다.
- javascript에서는 변수를 할당만 하고 정의를 안하면 ex) let age; undefined가 저장된다.
- typeof는 데이터 타입을 말해준다. 참고로 undefined와 null은 각각 undefined, object형이다.
- 문자열을 표현할 때에 "", '', `` 세가지로 표현이 가능하다.
  - ""은 안에 있는 모든 문자가 문자로 취급되는 듯.
  - ''은 ' 이나 몇몇 문자를 사용할 때 역슬래쉬를 사용.
  - ``는 ${name}로 안에 변수를 넣을 수 있다. (중괄호임. 주의!!)

### 형변환

- prompt로 입력받으면 무조건 문자열
- 자동 형변환으로 "90" / 2 는 45로 나온다. 자동형변환은 주의해야함.
- String()은 문자열로 바꿔준다.
- Number()은 문자열을 숫자로 바꿔주는데 문자가 섞여 있으면 NaN을 반환한다.

- Boolean은 숫자 0, 빈 문자열, null, undefined, NaN은 모두 false로 변경해준다.

#### 주의사항

- Number(null) // 0
- Number(undefined) // NaN

### 연산자

- const num = 2 ** 3 : 거듭제곱을 나타낸다.
- 비교 연산자 ==를 사용하면 타입은 비교하지 않는다 따라서 "1" == 1은 true이다. 그래서 ===을 사용해야한다. 이는 타입도 비교한다.

### 반복문

- 스위치
  - default : 는 else와 같음.

``` javascript
switch(평가) {
  case A:
    //A일 때 코드
  case B:
    //B일 때 코드
}

if (평가) {
  //A일 때 코드
} else if (평가 == B) {
  //B일 때 코드
}	
```

###  함수

#### function

``` javascript
function showError() {
  alert('에러가 발생했습니다. 다시 시도해주세요.');
}

showError();

function sayHello(name) {
  const msg = `hello, ${name}`;
  console.log(msg);
}
sayHello('mijeong');
```

- 인자의 default값을 설정할 수 있다.

``` javascript
fuction hihi(let name = 'mijeong') {
  console.log('hihi' + name)
}
```

- return만 있거나 return이 없으면 undefined를 반환한다.
- 호이스팅(hoisting) : 코드 전체를 보고 함수의 선언문을 미리 저장해둔다. 따라서 함수의 선언을 나중에 하더라도 그 함수를 미리 사용하는 것이 가능하다.

### 함수 표현식

``` javascript
let sayHello = function() {
  console.log('Hello');
}
```

### 화살표 함수

- es6 이 후 활발하게 사용중이라고 한다.

``` javascript
let add = (num1, num2) => {
  return num1 + num2;
}
```

- return문은 소괄호로 표현 가능하다.
- return문 이 전에 여러줄의 코드가 있다면 소괄호로 표현이 불가능하다.

``` javascript
let add = (num1, num2) => (
  num1 + num2;
)
```

- return문이 한줄이라면 소괄호도 생략가능하다.

``` javascript
let add = (num1, num2) => num1 + num2;
```

- 인수가 하나라면 인수를 감싼 괄호도 생략가능하다.
- 하지만 인수가 없다면 괄호생략이 불가능하다.

### 객체 (Object)

``` javascript
const superman = {
  name : 'clark',
  age : 33,
}

// 접근
superman.name //'clark'
superman['age'] // 33

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제
delete superman.hairColor;
```

#### 단축 프로퍼티

``` javascript
const name = 'clark';
const age = 33;

const superman = {
  name, // name : name;
  age, // age : age;
  gender : 'male';
}
```

#### 프로퍼티 존재 여부 확인

``` javascript
const superman = {
  name : 'clark';
  age : 33;
}

superman.birthDay; // undefined
'birthDay' in superman; // false
'age' in superman; // true

```

#### for ... in 반복문

``` javascript
for (let key in superman) {
  console.log(key)
  console.log(superman[key]); // 여기서 superman.key라고 하면 superman의 key라는 멤버에 접근하므로 []을 써야한다.
}
```

- 객체 반환하는 함수

``` javascript
function makeObject(name, age) {
  return {
    name,
    age,
    hobby : 'football'
  }
}

const mijeong = makeObject(mijeong, 28);
console.log(mijeong);

console.log('age' in mijeong);
console.log('friend' in mijeong);
```

- 없는 멤버에 대해 접근하면 undefined가 나온다는 사실을 항상 생각하자.

### Object 메소드

#### 주의사항

- 화살표 메소드에서는 this가 전역객체를 가리킨다. 즉 자기 자신의 객체를 가리키지 않는다.
- 이 부분(this)에 대해서는 따로 공부를 해야하는 듯.

``` javascript
let boy = {
  name : 'mijeong'
  showName() {
    console.log(this.name); // 여기에서 this 대신 boy를 사용할 경우 boy라는 객체가 사라지면 문제가 발생한다.  따라서 this를 사용하는 것이 더 안전하다고 생각한다.
  },
}

boy.showName();
```

### 배열

- javascript에서는 배열을 만들 때 []을 사용한다.
- javascript에는 배열에 다양한 타입을 넣을 수 있다.

``` javascript
let arr = [
  '민수',
  3,
  false,
  {
    name : 'mijeong',
    age : 28,
  }
  function () {
    console.log('TEST');
  }
];
```

#### 반복문 : for ... of

- for ... in도 사용할 수 있지만 단점이 많다고 함. 이유가 뭘까??

``` javascript
let days ['월', '화', '수'];

for(let day of days){
  console.log(day);
}

console.log(days.length) // 여기서 length에 대해서 이야기 해보자...
```

