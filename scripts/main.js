const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/crow.jpg') {
        myImage.setAttribute('src','images/crow2.jpg');
    } else {
        myImage.setAttribute('src','images/crow.jpg');
    }
}

/*img要素への参照を、myImageに格納。
次に子の変数のonclickイベントハンドラープロパティに無名関数を代入。
するとクリックするたびに、
画像のsrc属性の値を取得。
条件文に沿ってsrcの値が元の画像のパスと等しいかチェック。
同じであれば二番目の画像に変更。もう一方の画像が強制的にimg要素の中に読み込まれるようにする。
既に変更されている場合はsrcの値をもとの画像のパスに戻して元の状態に戻る。*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUsername();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + 'さん、チェック感謝します。';
}}
/*prompt()関数はalertとは違ってユーザーにデータを入力するまで待機、ユーザーがOKを押した場合変数にデータを格納する。
今回はユーザーの名前。その後localStorageと呼ばれるAPIを呼び出すことでブラウザーにデータを格納して後で受け取れる。
localStorageのsetItem()関数を使って'name'と呼ばれるデータを作成。myNameに入ってるユーザーから入力されたデータを格納。
最後に見出しのtextContentに文字列と新しく格納されたユーザー名を設定する。*/

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + 'さん、チェック感謝します。';
}

/*最初にnameを取得しているかを確認。否定演算子(!で論理否定)を使用している。
存在しなければ上記で定義したsetUsernameが実行される。
存在する場合はlocalStorageからnameを取得。文字列とユーザーの名前を取得する。*/

myButton.onclick = () => {
    setUsername();
}
