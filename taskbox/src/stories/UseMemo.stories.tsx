import React, {useMemo, useState} from 'react';



export default {
    title: 'useMemo',
};


export const DifficultComputationExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA =  useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a ; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random() //добавление нагрузки на процессор
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a]);



    for (let i = 1; i <= b ; i++) {
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
    <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>

}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpForReactMemoExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

const newArray = useMemo( () => users.filter(u => u.toLowerCase().indexOf("a") > -1)
    , [users]
)

    const addUser = () => {
        const newUser = "Sveta " + new Date().getTime()
        setUsers([...users, newUser])
    }
    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}



export const LikeUseCallBack  = () => {
    console.log("LikeUseCallBack")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const newArray = useMemo( () => books.filter(b => b.toLowerCase().indexOf("a") > -1)
        , [books]
    )

    const addBook = () => {
        const newBook = "Angular " + new Date().getTime()
        setBooks([...books, newBook])
    }
    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>

        {counter}
        <Books books={newArray} addBook={addBook} />
    </>
}

const BooksSecret = (props: {books: Array<string>, addBook: () => void}) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((b, i) => <div key={i}>{b}</div>)
    }</div>
}

const Books = React.memo(BooksSecret)
